import { combine, forward, guard, merge, sample } from 'effector';

import {
  sendDailyCheckAppContactUsFormFx,
  sendJoinUsFormFx,
} from '~/api/project-connect';
import { router } from '~/core/routes';
import { getInverted, setPayload } from '~/lib/effector-kit';

import {
  $fullName,
  $fullNameError,
  onFullNameChange,
  $organization,
  $organizationError,
  onOrganizationChange,
  $purpose,
  $purposeError,
  onPurposeChange,
  $yourMessage,
  $yourMessageError,
  onYourMessageChange,
  $firstname,
  $firstnameError,
  onFirstnameChange,
  $lastname,
  $lastnameError,
  onLastnameChange,
  $email,
  $emailError,
  onEmailChange,
  $school_id,
  $school_idError,
  onSchoolIdChange,
  $message,
  $messageError,
  onMessageChange,
  onDailyCheckAppFormSubmit,
  $isMenuOpen,
  $isSendButtonDisabled,
  $isSendButtonPending,
  $submitSuccess,
  $isDailyCheckAppSendButtonDisabled,
  $isDailyCheckAppSendButtonPending,
  $submitDailyCheckAppSuccess,
  clearFormFields,
  onJoinUsFormSubmit,
  toggleMenu,
} from '@/project/model';
import { onAboutRef, onPrivacyRef } from '@/project/ui';
import { scrollToHashFx } from '@/scroll';

$isMenuOpen.on(toggleMenu, getInverted);

$fullName.on(onFullNameChange, setPayload);
$organization.on(onOrganizationChange, setPayload);
$purpose.on(onPurposeChange, setPayload);
$yourMessage.on(onYourMessageChange, setPayload);

$firstname.on(onFirstnameChange, setPayload);
$lastname.on(onLastnameChange, setPayload);
$school_id.on(onSchoolIdChange, setPayload);
$email.on(onEmailChange, setPayload);
$message.on(onMessageChange, setPayload);

$fullName.reset(clearFormFields);
$organization.reset(clearFormFields);
$purpose.reset(clearFormFields);
$yourMessage.reset(clearFormFields);

$firstname.reset(clearFormFields);
$lastname.reset(clearFormFields);
$school_id.reset(clearFormFields);
$email.reset(clearFormFields);
$message.reset(clearFormFields);

sendJoinUsFormFx.done.watch(() => {
  clearFormFields();
});

sendDailyCheckAppContactUsFormFx.done.watch(() => {
  clearFormFields();
});

sample({
  source: sendJoinUsFormFx.done,
  fn: () => true,
  target: $submitSuccess,
});

sample({
  source: sendDailyCheckAppContactUsFormFx.done,
  fn: () => true,
  target: $submitDailyCheckAppSuccess,
});

sample({
  source: merge([
    onFullNameChange,
    onOrganizationChange,
    onPurposeChange,
    onYourMessageChange,
  ]),
  fn: () => false,
  target: $submitSuccess,
});
sample({
  source: merge([
    onFirstnameChange,
    onLastnameChange,
    onSchoolIdChange,
    onEmailChange,
    onMessageChange,
  ]),
  fn: () => false,
  target: $submitDailyCheckAppSuccess,
});

forward({
  from: combine([$fullName, $organization, $yourMessage, $purpose], (states) =>
    states.some((state) => !state)
  ),
  to: $isSendButtonDisabled,
});

forward({
  from: combine(
    [$firstname, $lastname, $school_id, $email, $message],
    (states) => states.some((state) => !state)
  ),
  to: $isDailyCheckAppSendButtonDisabled,
});

forward({
  from: sendJoinUsFormFx.pending,
  to: $isSendButtonPending,
});

forward({
  from: sendDailyCheckAppContactUsFormFx.pending,
  to: $isDailyCheckAppSendButtonPending,
});

sample({
  source: $fullName,
  clock: merge([onFullNameChange, onJoinUsFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $fullNameError,
});

sample({
  source: $organization,
  clock: merge([onOrganizationChange, onJoinUsFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $organizationError,
});

sample({
  source: $firstname,
  clock: merge([onFirstnameChange, onDailyCheckAppFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $firstnameError,
});

sample({
  source: $purpose,
  clock: merge([onPurposeChange, onJoinUsFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $purposeError,
});

sample({
  source: $lastname,
  clock: merge([onLastnameChange, onDailyCheckAppFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $lastnameError,
});

sample({
  source: $yourMessage,
  clock: merge([onYourMessageChange, onJoinUsFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $yourMessageError,
});

sample({
  source: $message,
  clock: merge([onMessageChange, onDailyCheckAppFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $messageError,
});

sample({
  source: $email,
  clock: merge([onEmailChange, onDailyCheckAppFormSubmit]),
  fn: (state) => state.trim().length === 0,
  target: $emailError,
});

const $formError = combine(
  [$fullNameError, $organizationError, $purposeError, $yourMessageError],
  (states) => states.some(Boolean)
);

const $formDailyCheckAppError = combine(
  [
    $firstnameError,
    $lastnameError,
    $school_idError,
    $emailError,
    $messageError,
  ],
  (states) => states.some(Boolean)
);

const $formValues = combine([$fullName, $organization, $purpose, $yourMessage]);
const $formDailyCheckAppValues = combine([
  $firstname,
  $lastname,
  $school_id,
  $email,
  $message,
]);

const onSubmitForm = sample({
  source: $formError,
  clock: onJoinUsFormSubmit,
});

const onDailyCheckAppSubmitForm = sample({
  source: $formDailyCheckAppError,
  clock: onDailyCheckAppFormSubmit,
});

sample({
  source: $formValues,
  clock: guard(onSubmitForm, { filter: getInverted }),
  fn: ([fullName, organization, purpose, yourMessage]) => ({
    fullName,
    organization,
    purpose,
    yourMessage,
  }),
  target: sendJoinUsFormFx,
});

sample({
  source: $formDailyCheckAppValues,
  clock: guard(onDailyCheckAppSubmitForm, { filter: getInverted }),
  fn: ([firstname, lastname, school_id, email, message]) => ({
    firstname,
    lastname,
    school_id,
    email,
    message,
  }),
  target: sendDailyCheckAppContactUsFormFx,
});

sample({
  source: combine([router.pathname, router.hash]),
  fn: () => false,
  target: $isMenuOpen,
});

sample({
  source: router.hash,
  clock: guard(onAboutRef, { filter: Boolean }),
  target: scrollToHashFx,
});

sample({
  source: router.hash,
  clock: guard(onPrivacyRef, { filter: Boolean }),
  target: scrollToHashFx,
});
