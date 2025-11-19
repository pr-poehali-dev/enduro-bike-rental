import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Chapter {
  id: number;
  title: string;
  content: string[];
  imageUrl?: string;
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "Глава 1. Ранние дни — Вдохновение и трудности",
    content: [
      "Суджак, маленький, но живописный город на побережье Крыма, с каждым годом привлекал всё больше туристов. Его красивое побережье и невероятные виды привлекали людей, желающих провести отпуск вдали от городской суеты. Но среди всего этого был один человек, который мечтал о чём-то большем.",
      "Толик, как и многие в его возрасте, ещё с детства был влюблён в мотоциклы. Помня, как его отец брал его в свои поездки на мотоцикле, Толик мечтал о создании бизнеса, который бы соединял его страсть с возможностью дарить людям эмоции и приключения.",
      "\"Прокат скутеров?\" — эта идея пришла к нему после того, как он увидел, как люди скучают в поисках интересных занятий. Идея была проста: ведь так много туристов приезжают в Крым, но не все из них могут наслаждаться красотой местных дорог, а что если бы они могли ездить по этому величественному краю на скутерах? Сначала это была небольшая аренда — несколько скутеров на пляже. Но это быстро стало популярным, и желание предлагать больше приключений привело к появлению новых видов транспорта — мотоциклов.",
      "Аня, его жена, всегда поддерживала его идеи, но ей также было важно сделать так, чтобы сервис был качественным. Она взяла на себя роль менеджера, отвечая за организацию работы и отношения с клиентами. Работать с туристами было непросто, ведь не все приходили с ясным представлением о том, что они хотят. Но Аня быстро научилась вести разговоры с клиентами, устраивать прокат и помогать им выбрать подходящие маршруты."
    ],
    imageUrl: "https://cdn.poehali.dev/files/73135fdd-8054-4418-b415-1f3cabbc26dd.jpeg"
  },
  {
    id: 2,
    title: "Глава 2. Прокачка сервиса — Первые шаги к эндуро",
    content: [
      "Прокат скутеров стал популярным, но в какой-то момент Толик понял, что бизнес не может оставаться на одном уровне. Он всегда мечтал о чём-то большем, о настоящих приключениях, а не только об удовольствии от прогулок по пляжу. Это привело к идее расширения — открытие проката эндуро мотоциклов.",
      "Эндуро мотоциклы требовали большего внимания и ухода. Они были более мощными и требовали особых маршрутов и подготовки. Толик и Аня начали разрабатывать новые маршруты, которые позволяли клиентам почувствовать экстрим и наслаждаться невероятными видами гор Крыма. Вскоре появилось несколько мотоциклов, подходящих для таких путешествий, и был создан новый продукт — туристические поездки по горным маршрутам.",
      "Первым инструктором стал Серёжа — молодой и опытный райдер, который знал все окрестности. Он помогал новичкам чувствовать себя уверенно на сложных маршрутах, обучал их базовым навыкам вождения и обеспечивал безопасность. Толик и Аня также начали привлекать больше клиентов, которые искали новых впечатлений.",
      "Один из первых клиентов, Сергей, который приехал с друзьями из Москвы, оставил невероятный отзыв о прокате: «Если хотите почувствовать адреналин и увидеть Крым с высоты, это место для вас! Мы катались по горам, встречали закат, и это было просто потрясающе!» Такие отзывы мотивировали Толика и Аню развивать бизнес дальше. Скоро появился новый человек в команде — Серёжа, инструктор по эндуро, который был не только опытным райдером, но и знал все нюансы горных маршрутов."
    ],
    imageUrl: "https://cdn.poehali.dev/files/97eafcf4-c07e-47e8-9460-1f50dd3d6321.jpeg"
  },
  {
    id: 3,
    title: "Глава 3. Технологический прогресс и первые проблемы",
    content: [
      "Когда количество клиентов увеличилось, появилось множество новых проблем. Не хватало персонала для поддержания высокого уровня сервиса, а техника требовала постоянного обслуживания. Это привело к созданию первой мастерской и шинного центра. Толик решил нанять опытного механика, Никиту, который быстро наладил техническое обслуживание.",
      "Никита, хоть и был достаточно молод, имел большой опыт работы с мототехникой, и его мастерская стала настоящей находкой для бизнеса. Толик не мог не отметить, что без этой мастерской бизнес не был бы таким успешным, как стал. Он также начал развивать другие аспекты бизнеса, такие как маркетинг и привлечение клиентов через интернет. Со временем компания начала становиться известной не только в Крыму, но и за его пределами."
    ],
    imageUrl: "https://cdn.poehali.dev/files/e3c0b039-cbfa-468a-9bda-091bf3520902.jpeg"
  },
  {
    id: 4,
    title: "Глава 4. Работа с персоналом — Максима и Дима",
    content: [
      "Помимо Серёжи, вскоре в команду присоединился Максим. Он был новым помощником инструктора, и его страсть к мотоциклам и приключениям сразу заметили. Максим не только был отличным райдером, но и обладал харизмой, которая помогала новым клиентам быстрее адаптироваться. Он был главным источником энергии на маршрутах, и его личное увлечение катанием по трудным трассам вдохновляло клиентов на подвиги.",
      "\"Слушай, я люблю это чувство, когда мотоцикл буквально преодолевает трудности, — говорил он. — Давайте вместе откроем мир приключений для людей.\"",
      "Максим взял на себя важную роль в обучении новичков. Он очень любил делиться опытом, обучая людей тому, как безопасно преодолевать сложные маршруты. Но это не всегда было так просто. Часто приходилось работать с клиентами, которые боялись или переживали.",
      "Одним из таких людей был Дима. Дима был помощником инструктора, но в отличие от Максима, он обладал уникальной способностью работать с людьми, которые испытывали страх перед мотоциклами. Он всегда умел поддержать, помочь на трассе и, самое главное, убедить человека, что это не так страшно, как кажется.",
      "Дима был не только отличным техническим специалистом, но и психологом. Он умел подобрать правильные слова, чтобы клиент почувствовал уверенность. Его спокойствие и уверенность давали клиентам ощущение, что они могут справиться с любыми трудностями."
    ],
    imageUrl: "https://cdn.poehali.dev/files/dd429dc9-ec98-4134-bb2a-bde52bf965ac.jpeg"
  },
  {
    id: 5,
    title: "Глава 5. Развитие бизнеса — Маршруты, клиенты и новые предложения",
    content: [
      "Благодаря отличной работе Максима и Димы, прокат стал становиться всё более популярным. Но с ростом количества клиентов появлялись новые вызовы. Толик, Аня и их команда продолжали расширять не только предложения, но и инфраструктуру. Помимо традиционных маршрутов, они начали разрабатывать уникальные туры, такие как ночные поездки, семейные маршруты и маршруты для корпоративов.",
      "\"Мы должны предложить что-то уникальное, что привлекло бы всех, — говорил Толик. — Например, маршрут, который проходит через заброшенные деревни, где можно увидеть всё, что скрывает Крым.\"",
      "Клиенты были в восторге от этих новых предложений. Уникальные маршруты, которые сочетали в себе экстрим и культуру, привлекли огромное количество туристов. Каждое приключение было не только физически захватывающим, но и культурно интересным. Толик и Аня гордились тем, что смогли создать нечто большее, чем просто прокат. Они предложили целый опыт, погружение в атмосферу Крыма, которая была не только красивой, но и таинственной."
    ],
    imageUrl: "https://cdn.poehali.dev/files/b7b967a4-6a0c-4477-8ecb-bcd3d5c03224.jpeg"
  }
];

export default function Index() {
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const goToChapter = (chapterId: number) => {
    if (currentChapter !== null) {
      setDirection(chapterId > currentChapter ? 'forward' : 'backward');
    }
    setTimeout(() => setCurrentChapter(chapterId), 50);
  };

  const goToNextChapter = () => {
    if (currentChapter === null) {
      goToChapter(1);
    } else if (currentChapter < chapters.length) {
      goToChapter(currentChapter + 1);
    }
  };

  const goToPrevChapter = () => {
    if (currentChapter && currentChapter > 1) {
      goToChapter(currentChapter - 1);
    } else if (currentChapter === 1) {
      setCurrentChapter(null);
    }
  };

  const goToContents = () => {
    setCurrentChapter(null);
  };

  if (currentChapter === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="animate-fade-in">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="bg-gradient-to-br from-primary to-orange-600 text-white p-12 text-center">
                <div className="mb-6">
                  <Icon name="Book" size={64} className="mx-auto opacity-90" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  История Проката<br />Эндуро Мотоциклов<br />в Крыму
                </h1>
                <p className="text-xl opacity-90 mt-6">
                  От мечты к успешному бизнесу
                </p>
              </div>
              
              <div className="p-8 md:p-12 bg-white">
                <h2 className="text-2xl font-bold text-secondary mb-6 text-center">
                  Содержание
                </h2>
                <div className="space-y-4">
                  {chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => goToChapter(chapter.id)}
                      className="w-full text-left p-4 rounded-lg border-2 border-muted hover:border-primary hover:bg-orange-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">
                            {chapter.title}
                          </h3>
                        </div>
                        <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const chapter = chapters.find(c => c.id === currentChapter);
  
  if (!chapter) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className={`animate-${direction === 'forward' ? 'slide-in' : 'fade-in'}`}>
          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
            <div className="bg-gradient-to-r from-primary to-orange-600 text-white px-6 py-4 flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToContents}
                className="text-white hover:bg-white/20"
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Содержание
              </Button>
              <div className="text-sm font-medium opacity-90">
                Глава {chapter.id} из {chapters.length}
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-8 leading-tight">
                {chapter.title}
              </h1>

              {chapter.imageUrl && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={chapter.imageUrl} 
                    alt={chapter.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {chapter.content.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-foreground leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t-2 border-muted flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={goToPrevChapter}
                  disabled={currentChapter === 1}
                  className="group"
                >
                  <Icon name="ChevronLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  {currentChapter === 1 ? 'К содержанию' : 'Назад'}
                </Button>
                
                {currentChapter < chapters.length && (
                  <Button
                    onClick={goToNextChapter}
                    className="group"
                  >
                    Следующая глава
                    <Icon name="ChevronRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}

                {currentChapter === chapters.length && (
                  <Button
                    onClick={goToContents}
                    variant="outline"
                  >
                    Вернуться к содержанию
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}