import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const data = [
  { id: '01', text: 'Наличие официального документа' },
  { id: '02', text: 'Паспорт с пропиской' },
  { id: '03', text: 'Договор купли-продажи' },
  { id: '04', text: 'Технический паспорт транспортного средства' },
  { id: '05', text: 'Нотариальная доверенность' },
]

const Documents = () => {
  return (
    <div className="p-10">
      <div className="max-w-screen-xl mx-auto md:flex font-gilroyLight font-semibold">
        <div>
          <h3 className="mb-5 text-3xl">Необходимые документы<br />для вскрытия замка</h3>
          <div className="w-32 h-1 bg-blred-500 rounded mb-5" />
          <div className="p-4 md:hidden text-center">
            <StaticImage
              placeholder="blurred"
              width={320}
              src="./images/man.png"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
          <p>
            Мы работаем легально. Для оказания услуги необходимо предоставить мастеру по дверям документ,
            подтверждающий право собственности, распоряжения на недвижимое имущество (квартиру, дом, гараж, офис)
            либо автомобиль.
          </p>
          <div
            className="
              grid gap-4 mb-5
              grid-cols-1 grid-rows-5
              sm:grid-cols-2 sm:grid-rows-3
              md:grid-cols-3 md:grid-rows-2
            "
          >
            {data.map(({ id, text }) => (
              <div key={id} className="flex items-center">
                <div className="text-base flex-none bg-blred-700 w-12 h-12 rounded-full flex items-center justify-center text-white mr-5">
                  {id}
                </div>
                {text}
              </div>
            ))}
          </div>
          <p>
            Нередко при вскрытии замков возникает необходимость опроса соседей, чтобы они подтвердили факт проживания,
            владения собственностью. В этом случае мастер до проведения вскрытия пообщается с жильцами, проживающими
            с клиентом на одной площадке, или обратиться к менеджерам соседних организаций.
          </p>
        </div>
        <div className="flex-none md:w-[40%] pl-8 hidden md:block">
          <StaticImage
            placeholder="blurred m-4"
            width={468}
            src="./images/man.png"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Documents;
