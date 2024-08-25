var efficient = new Vue({
  el: '#efficient',
  data: {
    efficient: {
      chapter: null, 
      point: null,
      file: null,
      link: null,
    },
    chapters: [
      'Образовательная деятельность',
      'Научно-исследовательская деятельность',
      'Воспитательная, внеучебная работа',
      'Клиническая работа',
      'Развитие регионального здравоохранения',
      'Менеджмент качества'
    ],
    points: [
      {
        id: 0,
        chapter: "Образовательная деятельность",
        point: "Издание учебника, национального руководства",
        min: 15,
        max: null,
        comment: "Скан-копия страницы/страниц, содержащей выходные сведения (титульного листа, оборота ти­тульного листа, авантитула и др.) в электронном портфолио пре­подавателя",
        type: "file"
      },
      {
        id: 1,
        chapter: "Образовательная деятельность",
        point: "Издание учебного, методического, учебно-методического пособия с грифом Университета",
        min: 8,
        max: null,
        comment: "Ссылка на издание в электрон­ном каталоге Университета и/или Скан-копия страницы/страниц, содержащей выходные сведения (титульного листа, оборота ти­тульного листа, авантитула и др.) в электронном портфолио пре­подавателя",
        type: "link"
      },
      {
        id: 2,
        chapter: "Образовательная деятельность",
        point: "Разработка рабочей программы дисциплины (практики) в составе новой образовательной програм­мы высшего образования",
        min: 4,
        max: null,
        comment: "Ссылка на рабочую программу на сайте Университета",
        type: "link"
      },
      {
        id: 3,
        chapter: "Образовательная деятельность",
        point: "Разработка оценочных и методи­ческих материалов по дисциплине (практике) в составе новой обра­зовательной программы высшего образования",
        min: 4,
        max: null,
        comment: "Ссылка на оценочные (методи­ческие) материалы на сайте Университета",
        type: "link"
      },
      {
        id: 4,
        chapter: "Образовательная деятельность",
        point: "Разработка электронного обучающего модуля в со­ставе новой образователь­ной программы высшего обра­зования",
        min: 3,
        max: 6,
        comment: "Ссылка на модуль в ЭИОС Университета",
        type: "link"
      },
      {
        id: 5,
        chapter: "Образовательная деятельность",
        point: "Разработка до­полнительной общеобразова­тельной про­граммы",
        min: 2,
        max: 5,
        comment: "Ссылка на программу в ЭИОС (на сайте) Университета",
        type: "link"
      },
      {
        id: 6,
        chapter: "Образовательная деятельность",
        point: "Разработка до­полнительной профессио­нальной про­граммы - про­граммы повы­шения квали­фикации",
        min: 2,
        max: 5,
        comment: "Ссылка на программу на портале НМО",
        type: "link"
      },
      {
        id: 7,
        chapter: "Образовательная деятельность",
        point: "Разработка дополнительной про­фессиональной программы - про­граммы профессиональной пере­подготовки",
        min: 8,
        max: null,
        comment: "Ссылка на программу в ЭИОС (на сайте) Университета",
        type: "link"
      },
      {
        id: 8,
        chapter: "Образовательная деятельность",
        point: "Рецензирование компонента обра­зовательной программы высшего образования (рабочей программы дисциплины (практики), оценоч­ных, методических материалов), дополнительной общеобразова­тельной программы, дополни­тельной профессиональной про­граммы",
        min: 1,
        max: null,
        comment: "Скан-копия рецензии в элек­тронном портфолио преподава­теля",
        type: "file"
      },
      {
        id: 9,
        chapter: "Образовательная деятельность",
        point: "Руководство обучающимся- победителем (командой- победителем) образовательных и профессиональных конкурсов, олимпиад и др. международного и всероссийского уровня",
        min: 6,
        max: null,
        comment: "Скан-копия подтверждающего документа (диплома, грамоты и т.д.) и документа, отражающего степень участия руководителя, в электронном портфолио препо­давателя",
        type: "file"
      },
      {
        id: 10,
        chapter: "Образовательная деятельность",
        point: "Руководство обучающимся- призером (командой-призером) или победителями в номинации образовательных и профессио­нальных конкурсов, олимпиад и др. международного и всероссий­ского уровня",
        min: 4,
        max: null,
        comment: "Скан-копия подтверждающего документа (диплома, грамоты и т.д.) и документа, отражающего степень участия руководителя, в электронном портфолио препо­давателя",
        type: "file"
      },
      {
        id: 11,
        chapter: "Образовательная деятельность",
        point: "Руководство обучающимся- победителем (командой- победителем) образовательных и профессиональных конкурсов, олимпиад и др. межрегионального и регионального уровня",
        min: 3,
        max: null,
        comment: "Скан-копия подтверждающего документа (диплома, грамоты и т.д.) и документа, отражающего степень участия руководителя, в электронном портфолио препо­давателя",
        type: "file"
      },
      {
        id: 12,
        chapter: "Образовательная деятельность",
        point: "Руководство обучающимся- призером (командой-призером), победителями в номинации обра­зовательных и профессиональных конкурсов, олимпиад и др. межре­гионального и регионального уровня",
        min: 2,
        max: null,
        comment: "Скан-копия подтверждающего документа (диплома, грамоты и т.д.) и документа, отражающего степень участия руководителя, в электронном портфолио препо­давателя",
        type: "file"
      },
      {
        id: 13,
        chapter: "Образовательная деятельность",
        point: "Подготовка материалов предметной олимпиады для обучающихся по программам высшего обра­зования",
        min: 2,
        max: 4,
        comment: "Скан-копия подтверждающего документа, в электронном порт­фолио преподавателя",
        type: "file"
      },
      {
        id: 14,
        chapter: "Образовательная деятельность",
        point: "Техническое сопровождение предметной олимпиады для обу­чающихся по программам высше­го образования",
        min: 1,
        max: null,
        comment: "Скан-копия подтверждающего документа в электронном порт­фолио преподавателя",
        type: "file"
      },
      {
        id: 15,
        chapter: "Образовательная деятельность",
        point: "Участие в качестве члена оргкомите­та, жюри, апелляционной комиссии предметной олимпиады для обу­чающихся по программам высше­го образования",
        min: 2,
        max: null,
        comment: "Скан-копия подтверждающего документа в электронном портфолио преподавателя",
        type: "file"
      },
      {
        id: 16,
        chapter: "Образовательная деятельность",
        point: "Выступление с докладом на меро­приятии образовательной (в том числе учебно-методической) направленности (конференции, съезде, конгрессе) международно­го, всероссийского, межрегио­нального и регионального уровня",
        min: 2,
        max: null,
        comment: "Скан-копия подтверждающего документа (сертификата участ­ника, диплома и т.д.) и докумен­та, отражающего степень уча­стия автора, в электронном портфолио преподавателя А также ссылка на программу мероприятия или скан-копия программы мероприятия в электронном портфолио пре­подавателя",
        type: "file"
      },
      {
        id: 17,
        chapter: "Образовательная деятельность",
        point: "Получение гранта на развитие об­разовательных технологий, в том числе руководство обучающимися - получателями",
        min: 10,
        max: null,
        comment: "Скан-копия подтверждающего документа и документа, отража­ющего степень участия, в элек­тронном портфолио преподава­теля",
        type: "file"
      },
      {
        id: 18,
        chapter: "Образовательная деятельность",
        point: "Выполнение обязанностей, ответ­ственного за учебно­методическую работу на кафедре",
        min: 2,
        max: null,
        comment: "Скан-копия подтверждающего документа (служебной записки заведующего кафедрой) в элек­тронном портфолио преподава­теля",
        type: "file"
      }
    ]
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    openEfficientModal: function(){
      $('#efficient_modal').foundation('reveal', 'open');
    },
    closeEfficientModal: function(){
      $('#efficient_modal').foundation('reveal', 'close');
    },
  },
  created: function() {
    
    },
  mounted: function () {
    
  },
})
