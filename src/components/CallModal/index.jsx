import React, { useEffect, useState } from 'react';

import Button from '../Button';

const INP_STYLES = 'border border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
const ERR_STYLES = 'absolute text-xs text-red-500 font-gilroyLight font-semibold left-2 bottom-2';

const CallModal = ({ close }) => {
  const [values, setValues] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });

  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0];
    htmlElement.style.overflow = 'hidden';
    document.body.style['overflow-y'] = 'scroll';
    return () => {
      htmlElement.style.overflow = 'unset';
      document.body.style['overflow-y'] = 'unset';
    }
  }, []);

  const validateName = (value) => {
    if (!value) return 'Это поле обязательно для заполнения!';
    if (!(/^[А-Яа-яA-Za-z\s]*$/.test(value))) return 'Имя может содержать только буквы!';
    return '';
  }

  const validatePhone = (value) => {
    if (!value) return 'Это поле обязательно для заполнения!';
    if (!(/^[0-9\s\-\(\)\+]*$/.test(value))) return 'Неправильный формат номера телефона!';
    return '';
  }

  const nameChangeHandler = (value) => {
    if (errors.name) setErrors(errors => ({ ...errors, name: '' }));
    setValues(val => ({ ...val, name: value }));
  }

  const phoneChangeHandler = (value) => {
    if (errors.phone) setErrors(errors => ({ ...errors, phone: '' }));
    setValues(val => ({ ...val, phone: value }));
  }

  const submit = () => {
    const nameError = validateName(values.name);
    const phoneError = validatePhone(values.phone);

    if (nameError) setErrors(errors => ({ ...errors, name: nameError }));
    if (phoneError) setErrors(errors => ({ ...errors, phone: phoneError }));

    if (nameError || phoneError) return;

    console.log('SUBMIT >>>>>>>>', values);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 overscroll-none flex items-center justify-center"
    >
      <div
        className="bg-white w-[95%] rounded shadow-lg overflow-hidden p-5 sm:p-10 max-w-[600px]"
      >
        <div className="pb-6 relative">
          <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Ваше имя</label>
          <input
            value={values.name}
            onChange={e => nameChangeHandler(e.target.value)}
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
            onChange={e => phoneChangeHandler(e.target.value)}
            type="text"
            id="phone"
            className={`${INP_STYLES} ${errors.phone && 'border-red-500'}`}
            placeholder="+7 (999) 123-4567"
            required
          />
          {errors.phone && <div className={ERR_STYLES}>{errors.phone}</div>}
        </div>
        <div className="flex justify-end">
          <Button onClick={close} type="transparent" size="small">
            Отмена
          </Button>
          <Button onClick={submit} size="small" className="ml-2">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CallModal;
