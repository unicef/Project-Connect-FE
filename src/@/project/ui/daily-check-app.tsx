import { createEvent } from 'effector';
import ReCaptcha from '@matt-block/react-recaptcha-v2';
import clsx from 'clsx';
import { useStore } from 'effector-react';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Button } from '~/ui';

import { RECAPTCHA_KEY } from '~/env';
import { getInputValue } from '~/lib/event-reducers';
import { Link } from '~/lib/router';

import IconUse from '~/assets/images/use_pcdc.svg';
import ImageDailyCheckApp1 from '~/assets/images/daily-check-app-1.svg';
import ImageDataSharing2 from '~/assets/images/daily-check-app-2.png';
import IconDownloadButton from '~/assets/images/pcdc_download.svg';
import IconCheckSchool from '~/assets/images/check_pcdc.svg';
import IconStakeholder from '~/assets/images/stakeholder_pcdc.svg';
import IconUploadResult from '~/assets/images/upload_result_pcdc.svg';
import IconDownload from '~/assets/images/download_pcdc.svg';
import IconInstall from '~/assets/images/install_pcdc.svg';
import {
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
  $isDailyCheckAppSendButtonDisabled,
  $isDailyCheckAppSendButtonPending,
  $submitDailyCheckAppSuccess,
} from '@/project/model';

const Error = styled.div`
  /* stylelint-disable scss/operator-no-unspaced */
  position: absolute;
  bottom: -2rem;
  left: 0;
  color: #ec0707;
  font-size: 1.5rem;
  font-family: Cabin, sans-serif;
  letter-spacing: 1px;

  @media (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

export const onDailyCheckAppRef = createEvent<HTMLDivElement | null>();

const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  onDailyCheckAppFormSubmit();
};

export const DailyCheckApp = () => {
  const firstname = useStore($firstname);
  const lastname = useStore($lastname);
  const school_id = useStore($school_id);
  const email = useStore($email);
  const message = useStore($message);

  const firstnameError = useStore($firstnameError);
  const lastnameError = useStore($lastnameError);
  const school_idError = useStore($school_idError);
  const emailError = useStore($emailError);
  const messageError = useStore($messageError);

  const isDailyCheckAppSendButtonDisabled = useStore(
    $isDailyCheckAppSendButtonDisabled
  );
  const isDailyCheckAppSendButtonPending = useStore(
    $isDailyCheckAppSendButtonPending
  );
  const errorText = 'This field is required';

  const handleFirstnameChange = onFirstnameChange.prepend(getInputValue);
  const handleLastnameChange = onLastnameChange.prepend(getInputValue);
  const handleSchool_idChange = onSchoolIdChange.prepend(getInputValue);
  const handleEmailChange = onEmailChange.prepend(getInputValue);
  const handleMessageChange = onMessageChange.prepend(getInputValue);
  const [isOpenedDropdown, setOpenedDropdown] = useState(false);

  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  return (
    <div ref={onDailyCheckAppRef}>
      <section className="section mapping" id="introduction">
        <div className="container">
          <div className="mapping__row">
            <div className="mapping__media">
              <div className="mapping__image-wrapper">
                <ImageDailyCheckApp1
                  className="mapping__image-list__icon"
                  alt="Partnerships"
                />
              </div>
            </div>
            <div className="mapping__info">
              <h3 className="mapping__title" style={{ marginBottom: '30px' }}>
                Project Connect Daily Check Application
              </h3>
              <h4
                className="mapping-list__title"
                style={{ marginBottom: '40px' }}
              >
                Help your school get better connectivity. Share your school's
                internet status with Project Connect every day.
              </h4>
              <ul className="mapping__list mapping-list">
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconCheckSchool
                      className="mapping-list__icon"
                      alt="Machine Learning"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">
                      Checks school internet connection
                    </h4>
                    <p className="mapping-list__text">
                      Every day, Daily Check automatically performs a short test
                      using minimal data, to determine the quality and speed of
                      your school's network.
                    </p>
                  </div>
                </li>
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconUploadResult
                      className="mapping-list__icon"
                      alt="Partnerships"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">
                      Uploads results to public database
                    </h4>
                    <p className="mapping-list__text">
                      The results are uploaded to Project Connect's Open Data
                      platform to provide an accurate picture of your school's
                      location and network quality over time.
                    </p>
                  </div>
                </li>
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconStakeholder
                      className="mapping-list__icon"
                      alt="Real-time internet measurement tools"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">
                      Provides key information to stakeholders
                    </h4>
                    <p className="mapping-list__text">
                      This information helps government and organisations focus
                      resources to improve your school's internet connection.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="mapping__list mapping-list">
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-download-wrapper">
                    <a
                      href="https://github.com/unicef/project-connect-daily-check-app/releases/download/v1.0.0/unicef-pdca-setup-1.0.0.exe"
                      target={'_blank'}
                    >
                      <IconDownloadButton
                        className="mapping-list__icon"
                        alt="Machine Learning"
                      />
                    </a>
                  </div>
                  <div className="mapping-list__info-download-wrapper">
                    <h4 className="mapping-list__title">
                      123MB. Windows OS only
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section mapping" id="download">
        <div className="container">
          <a href="#download">
            <h2 className="section__title">Download Daily Check App</h2>
          </a>
          <div className="mapping__row mapping__row--inverted">
            <div className="mapping__media">
              <div className="mapping__image-wrapper">
                <img
                  src={ImageDataSharing2}
                  alt="Data sharing and privacy"
                  className="mapping__image"
                  style={{ width: '88%' }}
                />
              </div>
            </div>
            <div className="mapping__info">
              <h3 className="mapping__title">
                3 Easy Steps to better connectivity for your school
              </h3>
              <ul className="mapping__list mapping-list">
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconDownload
                      className="mapping-list__icon"
                      alt="School location data everywhere should be public"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">1. Download</h4>
                    <p className="mapping-list__text">
                      Click on the Download icon below to save the Daily Check
                      executable file (.exe) to your computer.
                    </p>
                  </div>
                </li>
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconInstall
                      className="mapping-list__icon"
                      alt="Public data gathered with public money creates
                          public goods"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">2. Install</h4>
                    <p className="mapping-list__text">
                      Click on the saved file and select Run, then follow the
                      prompts to accept the license agreement and complete the
                      installation.
                    </p>
                  </div>
                </li>
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-wrapper">
                    <IconUse
                      className="mapping-list__icon"
                      alt="Child protection should always be prioritized"
                    />
                  </div>
                  <div className="mapping-list__info-wrapper">
                    <h4 className="mapping-list__title">3. Use</h4>
                    <p className="mapping-list__text">
                      Open the installed Daily Check Application and register
                      with your School ID to get started.
                    </p>
                  </div>
                </li>
              </ul>

              <ul className="mapping__list mapping-list">
                <li className="mapping-list__item">
                  <div className="mapping-list__icon-download-wrapper">
                    <a
                      href="https://github.com/unicef/project-connect-daily-check-app/releases/download/v1.0.0/unicef-pdca-setup-1.0.0.exe"
                      target={'_blank'}
                    >
                      <IconDownloadButton
                        className="mapping-list__icon"
                        alt="Machine Learning"
                      />
                    </a>
                  </div>
                  <div className="mapping-list__info-download-wrapper">
                    <h4 className="mapping-list__title">
                      123MB. Windows OS only
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section mapping" id="support">
        <div className="container" style={{ overflowX: 'inherit' }}>
          <a href="#support">
            <h2 className="section__title">Support</h2>
          </a>
          <div className="mapping__row mapping__row--inverted">
            <div className="mapping__media">
              <div className="mapping__image-wrapper"></div>
            </div>
            <div className="mapping__info">
              <div className="mapping__list mapping-list">
                <h2 className="page-heading__title about-intro__title">
                  Frequently Asked Questions
                </h2>
                <div className="faq">
                  <ul>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        What is a school ID
                      </h4>
                      <p className="mapping-list__text">
                        A school ID is a unique identifier for your school that
                        was provided by the government. There are different
                        formats, but usually looks something like "BR12345" or
                        "12345678"
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        How do I find my school ID
                      </h4>
                      <p className="mapping-list__text">
                        Your school administrator or IT department will know.
                        The school ID will be the number that is used in your
                        national registration system.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        My school is not part of Project Connect yet. What can I
                        do?
                      </h4>
                      <p className="mapping-list__text">
                        You can visit our website and fill out the contact form
                        to indicate to us that you would like to join our
                        initiative.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        Can I change my school ID?
                      </h4>
                      <p className="mapping-list__text">
                        Right now it is not possible to change your school ID.
                        If you’ve made a mistake and need to enter a new ID, you
                        should uninstall the application and start over.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        Can I install this application on more than one
                        computer?
                      </h4>
                      <p className="mapping-list__text">
                        Yes you can. In fact, we encourage it. If multiple
                        machines report data to the platform, the measurement
                        will be more reliable.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        What can I do if I am unhappy with the speed or
                        reliability of my internet connection?
                      </h4>
                      <p className="mapping-list__text">
                        You can visit our site and fill out the form to file a
                        report. We can then work with our suppliers to ensure
                        they deliver the quality of service they promised.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        Which kind of data will be transmitted to Giga?
                      </h4>
                      <p className="mapping-list__text">
                        The application will transmit upload- and download speed
                        as well as latency twice daily. In addition, non
                        personally identifiable information (PID) will be
                        shared, including IP address, school ID, App version,
                        Operating System et al.
                      </p>
                    </li>
                    <li>
                      <input type="checkbox" defaultChecked />
                      <i></i>
                      <h4 className="mapping-list__title">
                        Will Giga be able to access any other information on my
                        computer?
                      </h4>
                      <p className="mapping-list__text">
                        No, the application does not have access to any data
                        stored on your computer other than the data it collects
                        itself.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mapping" id="contact-us">
        <div className="container">
          <a href="#contact-us">
            <h2 className="section__title">Contact Us</h2>
          </a>
          <div className="feedback__row">
            <div className="feedback__col">
              <h3 className="feedback__title">
                Please get in touch with us if you need help
              </h3>
              <form
                // Action="mailto:projectconnect@unicef.org"
                // Method="POST"
                encType="text/plain"
                className="feedback__form form"
                onSubmit={onSubmit}
              >
                <div className="form__row">
                  <label htmlFor="name" className="form__item">
                    <p className="form__label">Firstname</p>
                    <input
                      id="firstname"
                      className={
                        firstnameError
                          ? ['form__input', 'input', 'input__error'].join(' ')
                          : ['form__input', 'input'].join(' ')
                      }
                      type="text"
                      name="firstname"
                      value={firstname}
                      onChange={handleFirstnameChange}
                      maxLength={50}
                    />
                  </label>
                  {firstnameError && (
                    <Error id="firstnameError">{errorText}</Error>
                  )}
                </div>

                <div className="form__row">
                  <label htmlFor="organization" className="form__item">
                    <p className="form__label">Lastname</p>
                    <input
                      id="lastname"
                      className={
                        lastnameError
                          ? ['form__input', 'input', 'input__error'].join(' ')
                          : ['form__input', 'input'].join(' ')
                      }
                      type="text"
                      name="organization"
                      value={lastname}
                      onChange={handleLastnameChange}
                      maxLength={50}
                    />
                  </label>
                  {lastnameError && (
                    <Error id="organizationError">{errorText}</Error>
                  )}
                </div>
                <div className="form__row">
                  <label htmlFor="organization" className="form__item">
                    <p className="form__label">School Id</p>
                    <input
                      id="school_id"
                      className={
                        lastnameError
                          ? ['form__input', 'input', 'input__error'].join(' ')
                          : ['form__input', 'input'].join(' ')
                      }
                      type="text"
                      name="organization"
                      value={school_id}
                      onChange={handleSchool_idChange}
                      maxLength={50}
                    />
                  </label>
                  {school_idError && (
                    <Error id="organizationError">{errorText}</Error>
                  )}
                </div>
                <div className="form__row">
                  <label htmlFor="organization" className="form__item">
                    <p className="form__label">Email</p>
                    <input
                      id="email"
                      className={
                        emailError
                          ? ['form__input', 'input', 'input__error'].join(' ')
                          : ['form__input', 'input'].join(' ')
                      }
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      maxLength={50}
                    />
                  </label>
                  {emailError && (
                    <Error id="organizationError">{errorText}</Error>
                  )}
                </div>
                <div className="form__row join-us-textarea">
                  <label htmlFor="message" className="form__item">
                    <p className="form__label">Your message</p>
                    <textarea
                      id="message"
                      style={{ height: '16.5rem', resize: 'none' }}
                      className={
                        messageError
                          ? ['form__input', 'textarea', 'textarea__error'].join(
                              ' '
                            )
                          : ['form__input', 'textarea'].join(' ')
                      }
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
                      maxLength={500}
                    />
                  </label>
                  {messageError && (
                    <Error id="yourMessageError">{errorText}</Error>
                  )}
                </div>
                <ReCaptcha
                  siteKey={RECAPTCHA_KEY}
                  theme="light"
                  size="normal"
                  onSuccess={() => {
                    setIsRecaptchaVerified(true);
                  }}
                  onExpire={() => {
                    setIsRecaptchaVerified(false);
                  }}
                  onError={() => {
                    setIsRecaptchaVerified(false);
                  }}
                />
                <button
                  type="submit"
                  className={clsx(
                    'button',
                    'button--full-width',
                    'button--primary',
                    'join-us-button',
                    {
                      'button--primary-pending':
                        isDailyCheckAppSendButtonPending,
                    }
                  )}
                  disabled={
                    isDailyCheckAppSendButtonDisabled || !isRecaptchaVerified
                  }
                >
                  Send
                </button>
                {useStore($submitDailyCheckAppSuccess) && (
                  <div className="join-us-success-wrapper">
                    <div className="join-us-success">
                      Form submitted successfully
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
