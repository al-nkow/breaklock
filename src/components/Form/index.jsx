import React, { useState, useEffect } from 'react';

import Button from '../Button';
import Loader from '../Loader';

const INP_STYLES = 'border border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
const ERR_STYLES = 'absolute text-xs text-red-500 left-2 bottom-2';

const ERROR_MSG = 'Ошибка сервера! Попробуйте отправить заявку позже';

const Form = ({
  close, cancelButton, title, details,
}) => {
  const [values, setValues] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [serverErrorMsg, setServerErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validateName = (value) => {
    if (!value) return 'Это поле обязательно для заполнения!';
    if (!(/^[А-Яа-яA-Za-z\s]*$/.test(value))) return 'Имя может содержать только буквы!';
    return '';
  };

  const validatePhone = (value) => {
    if (!value) return 'Это поле обязательно для заполнения!';
    if (!(/^[0-9\s\-()+]*$/.test(value))) return 'Неправильный формат номера телефона!';
    return '';
  };

  const nameChangeHandler = (value) => {
    if (errors.name) setErrors((errs) => ({ ...errs, name: '' }));
    setValues((val) => ({ ...val, name: value }));
  };

  const phoneChangeHandler = (value) => {
    if (errors.phone) setErrors((errs) => ({ ...errs, phone: '' }));
    setValues((val) => ({ ...val, phone: value }));
  };

  const onSubmit = () => {
    setSubmitting(true);
    const url = '/api/mailer/send.php';
    const requestData = {
      order: `${new Date().getMonth() + 1}-${Math.random().toString().substr(2, 4)}`,
      ...values,
      ...(details && { details }),
    };

    // const myHeaders = new Headers();
    // myHeaders.append('Accept', 'application/json');
    // myHeaders.append('Content-Type', 'application/json');

    const fetchData = {
      method: 'POST',
      body: JSON.stringify(requestData),
      // headers: myHeaders,
    };

    fetch(url, fetchData)
      .then((res) => res.json())
      .then((response) => {
        if (response.result === 'success') {
          setSent(true);
        } else {
          setServerErrorMsg(ERROR_MSG);
        }
        setSubmitting(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('SUBMISSION ERROR:', err);
        setServerErrorMsg(ERROR_MSG);
        setSubmitting(false);
      });
  };

  const submit = () => {
    if (submitting) return;
    const nameError = validateName(values.name);
    const phoneError = validatePhone(values.phone);

    if (nameError) setErrors((errs) => ({ ...errs, name: nameError }));
    if (phoneError) setErrors((errs) => ({ ...errs, phone: phoneError }));

    if (nameError || phoneError) return;

    onSubmit();
  };

  useEffect(() => {
    let timer;
    if (sent) {
      timer = setTimeout(() => {
        close();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [sent]);

  useEffect(() => {
    let timer;
    if (serverErrorMsg) {
      timer = setTimeout(() => {
        setServerErrorMsg('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [serverErrorMsg]);

  return (
    <>
      {title && <div className="mb-5 font-gilroyMedium">{title}</div>}
      {submitting && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 bg-white bg-opacity-60">
          <Loader />
        </div>
      )}
      {serverErrorMsg && (<div className="text-blred-500 mb-5">{serverErrorMsg}</div>)}
      {sent ? (
        <>
          <div className="mb-10 font-gilroyMedium sm:text-xl">
            Ваша заявка отправлена!<br /> Скоро мы с Вами свяжемся.
          </div>
          <div className="flex justify-end">
            <Button onClick={close} size="small" className="ml-2">
              Закрыть
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="pb-6 relative">
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Ваше имя</label>
            <input
              value={values.name}
              onChange={(e) => nameChangeHandler(e.target.value)}
              type="text"
              id="first_name"
              className={`${INP_STYLES} ${errors.name && 'border-red-500'}`}
              placeholder="Иван Иванов"
              required
            />
            {errors.name && <div className={ERR_STYLES}>{errors.name}</div>}
          </div>
          <div className="pb-6 mb-5 relative">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">Номер телефона</label>
            <input
              value={values.phone}
              onChange={(e) => phoneChangeHandler(e.target.value)}
              type="text"
              id="phone"
              className={`${INP_STYLES} ${errors.phone && 'border-red-500'}`}
              placeholder="+7 (999) 123-4567"
              required
            />
            {errors.phone && <div className={ERR_STYLES}>{errors.phone}</div>}
          </div>
          <div className="flex justify-end">
            {cancelButton && (
              <Button onClick={close} type="transparent" size="small">
                Отмена
              </Button>
            )}
            <Button onClick={submit} size="small" className="ml-2">
              Отправить
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
