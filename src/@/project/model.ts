import { createEvent, createStore } from 'effector';

export const toggleMenu = createEvent();

export const onFullNameChange = createEvent<string>();
export const onOrganizationChange = createEvent<string>();
export const onPurposeChange = createEvent<string>();
export const onYourMessageChange = createEvent<string>();

export const onFirstnameChange = createEvent<string>();
export const onLastnameChange = createEvent<string>();
export const onSchoolIdChange = createEvent<string>();
export const onEmailChange = createEvent<string>();
export const onMessageChange = createEvent<string>();

export const clearFormFields = createEvent();

export const onJoinUsFormRequest = createEvent();
export const onJoinUsFormSubmit = createEvent();

export const onDailyCheckAppFormRequest = createEvent();
export const onDailyCheckAppFormSubmit = createEvent();

export const $isMenuOpen = createStore(false);

export const $fullName = createStore<string>('');
export const $organization = createStore<string>('');
export const $purpose = createStore<string>('');
export const $yourMessage = createStore<string>('');
export const $fullNameError = createStore<boolean>(false);
export const $organizationError = createStore<boolean>(false);
export const $purposeError = createStore<boolean>(false);
export const $yourMessageError = createStore<boolean>(false);

export const $isSendButtonDisabled = createStore<boolean>(true);
export const $isSendButtonPending = createStore<boolean>(false);
export const $submitSuccess = createStore<boolean>(false);

export const $firstname = createStore<string>('');
export const $lastname = createStore<string>('');
export const $school_id = createStore<string>('');
export const $email = createStore<string>('');
export const $message = createStore<string>('');
export const $firstnameError = createStore<boolean>(false);
export const $lastnameError = createStore<boolean>(false);
export const $school_idError = createStore<boolean>(false);
export const $emailError = createStore<boolean>(false);
export const $messageError = createStore<boolean>(false);

export const $isDailyCheckAppSendButtonDisabled = createStore<boolean>(true);
export const $isDailyCheckAppSendButtonPending = createStore<boolean>(false);
export const $submitDailyCheckAppSuccess = createStore<boolean>(false);
