import * as React from 'react';

import Seo from '../components/seo';
import Promo from '../components/Promo';
import Wrap from '../components/Wrap';
import usePage from '../hooks/usePage';
import { SERVICE_DATA } from '../constants';

const InfoBlock = (
  <Wrap extClassName="pt-12 pb-6 lg:pt-16 lg:pb-8" intClassName="md:flex">
    <p className="md:text-lg text-center">
      Компания &quot;Помогайкин&quot; предоставляет высококачественные услуги по замене
      личинки замка входной двери в Санкт-Петербурге. Наши опытные мастера обладают
      глубокими знаниями и навыками в этой области, гарантируя безопасность и надежность
      вашей двери. Мы понимаем, что замена личинки замка - важная процедура для обеспечения
      безопасности вашего дома или офиса.
    </p>
  </Wrap>
);

const Table = (
  <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] border-t border-gray-300 my-10 mx-auto">
    {SERVICE_DATA[2].items.map((s) => (
      <div
        key={s.id}
        className="bg-[#f2f2f2] inline-block text-center p-4 cursor-pointer flex justify-between items-start border-b border-l border-r border-gray-300"
      >
        <span className="max-w-[60%] text-left lowercase">{s.title}</span>
        <span>от <span className="text-lg">{s.price} ₽</span></span>
      </div>
    ))}
  </div>
);

const Description = (
  <Wrap extClassName="pt-12 pb-20 lg:pt-16 md:text-lg">
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Ситуации, когда необходима замена личинки замка</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Утеря ключей</em>&nbsp;<em>:</em>&nbsp; Если вы потеряли ключи или они были украдены, замена личинки замка обеспечит вам новые ключи и защиту от незаконного доступа.</li>
      <li className="mb-2"><em>Износ или повреждение замка</em>&nbsp;<em>:</em>&nbsp; С течением времени замки могут изнашиваться или повреждаться. Замена личинки замка решит эту проблему и восстановит работоспособность.</li>
      <li className="mb-2"><em>Повышение безопасности</em>&nbsp;<em>:</em>&nbsp; Если вы хотите усилить безопасность вашего дома или офиса, установка новой личинки с более современными механизмами безопасности может быть необходимой.</li>
    </ul>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Законность процедуры замены личинки замка входной двери</h2>
    <p className="mb-20 px-4 block mx-auto">Процедура замены личинки замка входной двери абсолютно законна, при условии, что вы являетесь владельцем или имеете разрешение на замену замка. Компания &quot;Помогайкин&quot; строго соблюдает все законы и нормы при проведении этой услуги.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Порядок действий </h3>
    <ol className="list-decimal px-4 mx-auto mb-20">
      <li className="mb-2"><em>Заявка и консультация</em>&nbsp;<em>:</em>&nbsp; Свяжитесь с нами по телефону или через сайт, чтобы оставить заявку и получить бесплатную консультацию.</li>
      <li className="mb-2"><em>Оценка и выбор замка</em>&nbsp;<em>:</em>&nbsp; Наши специалисты проведут оценку ситуации и помогут вам выбрать подходящий замок.</li>
      <li className="mb-2"><em>Замена личинки замка</em>&nbsp;<em>:</em>&nbsp; Мы проведем процедуру замены личинки замка с учетом всех требований и сроков.</li>
      <li className="mb-2"><em>Выдача ключей</em>&nbsp;<em>:</em>&nbsp; После замены мы вручим вам новые ключи и удостоверимся, что замок работает безупречно.</li>
    </ol>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Преимущества вызова службы замены личинки замка</h2>
    <ul className="list-disc px-4 mx-auto mb-20">
      <li className="mb-2"><em>Экстренная помощь</em>&nbsp;<em>:</em>&nbsp; Мы доступны 24/7, готовы прийти на помощь в любое время дня и ночи.</li>
      <li className="mb-2"><em>Профессионализм</em>&nbsp;<em>:</em>&nbsp; Наши мастера обладают опытом и знаниями для решения любых сложных ситуаций.</li>
      <li className="mb-2"><em>Безопасность и гарантия</em>&nbsp;<em>:</em>&nbsp; Мы гарантируем безопасность ваших дверей и предоставляем гарантию на выполненные работы.</li>
    </ul>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Рекомендации по действиям</h3>
    <p className="mb-20 px-4 block mx-auto">В случае утери ключей или необходимости замены личинки замка, рекомендуется сразу обратиться к профессионалам. Не пытайтесь сделать это самостоятельно, чтобы избежать повреждений дверей и замков.</p>
    <h3 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Типы личинок замков</h3>
    <p className="mb-20 px-4 block mx-auto">У нас есть широкий выбор личинок замков различных типов и уровней безопасности, чтобы удовлетворить ваши потребности.</p>
    <h2 className="mb-10 text-2xl sm:text-3xl font-gilroyMedium text-center">Вызов нашего специалиста для замены личинки замка входной двери в Санкт-Петербурге и Ленобласти</h2>
    <ul className="list-disc px-4 mx-auto mb-10">
      <li className="mb-2"><em>Опыт и профессионализм</em>&nbsp;<em>:</em>&nbsp; Мы на рынке уже много лет и заслужили доверие клиентов своим опытом и качественными услугами.</li>
      <li className="mb-2"><em>Доступность</em>&nbsp;<em>:</em>&nbsp; Мы работаем не только в Санкт-Петербурге, но и в Ленобласти, обеспечивая широкий охват территории.</li>
      <li className="mb-2"><em>Быстрое реагирование</em>&nbsp;<em>:</em>&nbsp; Мы быстро реагируем на заявки и приезжаем в кратчайшие сроки.</li>
    </ul>
    <p className="mb-10 px-4 block mx-auto">Мы готовы оказать услуги по замене личинки замка входной двери как в Санкт-Петербурге, так и в Ленинградской области. Независимо от вашего местоположения, вы можете рассчитывать на нас.</p>
    <p className="mb-10 px-4 block mx-auto">Свяжитесь с нами сегодня, и мы поможем вам обеспечить безопасность и надежность вашей двери с заменой личинки замка.</p>
  </Wrap>
);

const LockPickReplacement = ({ location }) => {
  usePage(location.search);
  return (
    <Promo info={InfoBlock} table={Table} description={Description}>
      <span className="text-blred-500">Замена</span><br />личинки замка<br />
      в <span className="text-blred-500">Санкт-Петербурге</span>
    </Promo>
  );
};

export const Head = () => (
  <Seo
    title="Замена личинки замка в СПб круглосуточно, срочно и недорого – цены от 1100 рублей"
    description="Замена личинки замка в СПб и ЛО круглосуточно с выездом от 15 минут. 100% гарантия качества работы мастера. Работаем со всеми видами механизмов."
  />
);

export default LockPickReplacement;
