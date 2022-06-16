var entrants = new Vue({
  el: '#entrant',
  data: {
    api: {
      hash: window.document.location.pathname.split('/')[2],
      current_tab: 'common',
      dictionaries: {
        countries: [],
        campaigns: [],
        identity_document_categories: [],
        specialities_dictionary: [],
        languages: [
          'Английский',
          'Французский',
          'Немецкий',
        ],
        benefit_document_categories: [
          {
            name: "Справка об установлении инвалидности"
          },
          {
            name: "Документ, подтверждающий принадлежность к детям-сиротам и детям, оставшимся без попечения родителей"
          },
          {
            name: "Документ, подтверждающий принадлежность к ветеранам боевых действий"
          },
          {
            name: "Документ, подтверждающий наличие только одного родителя - инвалида I группы и принадлежность к числу малоимущих семей"
          },
          {
            name: "Документ, подтверждающий принадлежность родителей и опекунов к погибшим в связи с исполнением служебных обязанностей"
          },
          {
            name: "Документ, подтверждающий принадлежность к сотрудникам государственных органов Российской Федерации"
          },
          {
            name: "Документ, подтверждающий участие в работах на радиационных объектах или воздействие радиации"
          },
          {
            name: "Документ, подтверждающий право поступления по специальной квоте"
          },
        ],
        olympic_document_catgories: [
          {
            name: "Диплом победителя/призера олимпиады школьников"
          },
          {
            name: "Диплом победителя/призера всероссийской олимпиады школьников"
          }
        ],
        education_document_categories: [
          {
            name: "Аттестат о среднем (полном) общем образовании"
          },
          {
            name: "Диплом о среднем профессиональном образовании"
          },
          {
            name: "Диплом о высшем профессиональном образовании"
          }
        ],
        other_document_types: [
          'Свидетельство об аккредитации специалиста',
          'Выписка из итогового протокола заседания аккредитационной комиссии',
          'Сертификат специалиста',
          'Военный билет',
          'Документ о смене фамилии',
          'Иной документ'
        ],
        education_speciality_codes: [
          {
            code: '31.05.01',
            name: 'Лечебное дело'
          },
          {
            code: '31.05.02',
            name: 'Педиатрия'
          },
          {
            code: '31.05.03',
            name: 'Стоматология'
          },
          {
            code: '32.05.01',
            name: 'Медико-профилактическое дело'
          },
          {
            code: '33.05.01',
            name: 'Фармация'
          },
          {
            code: '30.05.01',
            name: 'Медицинская биохимия'
          },
          {
            code: '30.05.02',
            name: 'Медицинская биофизика'
          },
          {
            code: '30.05.03',
            name: 'Медицинская кибернетика'
          },
          {
            code: '37.05.01',
            name: 'Клиническая психология'
          },
          {
            code: '00.00.00',
            name: 'Другая'
          }
        ]
      }
    },
    errors: [],
    files: '',
    dataset: '',
    entrant: {
      id: null,
      nationality: false,
      personal: {
        last_name: '',
        first_name: '',
        middle_name: '',
        gender: '',
        birth_date: '',
      },
      contact_information: {
        address: '',
        zip_code: '',
        email: '',
        phone: ''
      },
      entrant_applications: [
        {
          application_number: '',
          competitive_group_id: null,
          return_date: '',
          created_at: ''
        }
      ],
      status: '',
      stage: 0,
      need_hostel: false,
      special_entrant: false,
      special_conditions: '',
      snils: '',
      snils_absent: false,
      language: '',
      questionnaire: [],
      data_processing_consents: [
        {
          id: null,
          document_type: '',
        }
      ],
      identity_documents: [
        {
          id: null,
          document_type: '',
          document_category: '',
          serie: '',
          number: '',
          date: '',
          issuer: '',
          status: null,
          last_name: '',
          first_name: '',
          middle_name: ''
        }
      ],
      education_documents: [
        {
          id: null,
          document_type: '',
          document_category: '',
          number: '',
          date: '',
          issuer: '',
          original: '',
        }
      ],
      snils: [
        {
          id: null,
          document_type: '',
          number: '',
        }
      ],
      marks: [
        {
          id: null,
          value: null,
          subject: '',
          test_type: '',
          value: null,
          year: null,
          organization_uid: ''
        }
      ],
      sum: null,
      achievements_sum: null,
      full_sum: null,
      achievements: [
        {
          id: null,
          name: '',
          value: '',
          checked: false
        }
      ],
      achievements_ids: [],
      olympic_documents: [
        {
          id: null,
          document_type: '',
          document_category: '',
          number: '',
          date: '',
          class_number: '',
          original: ''
        }
      ],
      benefit_documents: [
        {
          id: null,
          document_type: '',
          document_category: '',
          serie: '',
          number: '',
          date: '',
          issuer: '',
          original: ''
        }
      ],
      target_contracts: [
        {
          id: null,
          document_type: '',
          competitive_group_id: '',
          original: ''
        }
      ],
      other_documents: [
        {
          id: null,
          document_type: '',
          document_category: '',
          serie: '',
          number: '',
          date: '',
          issuer: '',
          original: ''
        }
      ],
      competitive_group_ids: [],
      contragent: {
          id: null,
          last_name: '',
          first_name: '', 
          middle_name: '',
          birth_date: '',
          identity_document_serie: '',
          identity_document_number: '',
          identity_document_date: '',
          identity_document_issuer: '',
          identity_document_data: '',
          email: '',
          phone: '',
          address: ''
      },
      tickets: [
        {
          id: null,
          entrant_id: null,
          parent_ticket: null,
          message: '',
          solved: false,
          created_at: null,
          children: []
        }
      ],
      attachments: [],
    }
  },
  computed: {
    checkFirstName: function() {
      if(this.entrant.personal.first_name.charAt(0).toUpperCase() + this.entrant.personal.first_name.slice(1).toLowerCase() != this.entrant.personal.first_name) return 'Обычно имя начинается с заглавной буквы, за которой следуют строчные';
    },
    checkMiddleName: function() {
      if(this.entrant.personal.middle_name.charAt(0).toUpperCase() + this.entrant.personal.middle_name.slice(1).toLowerCase() != this.entrant.personal.middle_name) return 'Обычно отчество начинается с заглавной буквы, за которой следуют строчные';
    },
    checkLastName: function() {
      if(this.entrant.personal.last_name.charAt(0).toUpperCase() + this.entrant.personal.last_name.slice(1).toLowerCase() != this.entrant.personal.last_name) return 'Обычно фамилия начинается с заглавной буквы, за которой следуют строчные';
    },
    checkFirstName: function() {
      if(this.entrant.personal.first_name.charAt(0).toUpperCase() + this.entrant.personal.first_name.slice(1).toLowerCase() != this.entrant.personal.first_name) return 'Обычно имя начинается с заглавной буквы, за которой следуют строчные';
    },
    checkBirthDate: function() {
      if(this.entrant.personal.birth_date){
        var numbers = this.entrant.personal.birth_date.split('-');
        var birthYear = Number(numbers[0]);
        var birthMonth = Number(numbers[1]) - 1;
        var birthDay = Number(numbers[2]);
        var message = [];
        var year = (new Date()).getFullYear();
        if(birthYear + birthMonth + birthDay) {
          if(!(Number(numbers[0]) > 0 && Number(numbers[0]) < Number(year))) message.push('Неверный год');
          if(!(Number(numbers[1]) > 0 && Number(numbers[1]) < 13)) message.push('Неверный месяц');
          if(!(Number(numbers[2]) > 0 && Number(numbers[2]) < 32)) message.push('Неверный день');
          return message.join(', ')
        }
      }
    },
    checkIdentityDocumentSerie: function() {
      message = '';
      if(this.entrant.identity_documents.find(function(element) {
        if(element.documentSerie == '') message = 'Необходимо указать серию документа, удостоверяющего личность';
      }));
      return message;
    },
    checkIdentityDocumentNumber: function() {
      message = '';
      if(this.entrant.identity_documents.find(function(element) {
        if(element.document_number == '') message = 'Необходимо указать номер документа, удостоверяющего личность';
      }));
      return message;
    },
    checkIdentityDocumentDate: function() {
      if(this.entrant.identity_documents.find(function(element) {
        if(element.date){
          var numbers = element.date.split('-');
          var birthYear = Number(numbers[0]);
          var birthMonth = Number(numbers[1]) - 1;
          var birthDay = Number(numbers[2]);
          var message = [];
          var year = (new Date()).getFullYear();
          if(birthYear + birthMonth + birthDay) {
            if(!(Number(numbers[0]) > 0 && Number(numbers[0]) < Number(year))) message.push('Неверный год');
            if(!(Number(numbers[1]) > 0 && Number(numbers[1]) < 13)) message.push('Неверный месяц');
            if(!(Number(numbers[2]) > 0 && Number(numbers[2]) < 32)) message.push('Неверный день');
          };
          return message.join(', ')
        }
      }));
    },
    checkEducationDocumentDate: function() {
      if(this.entrant.identity_documents.find(function(element) {
        if(element.education_document_date){
        var numbers = element.date.split('-');
        var birthYear = Number(numbers[0]);
        var birthMonth = Number(numbers[1]) - 1;
        var birthDay = Number(numbers[2]);
        var message = [];
        var year = (new Date()).getFullYear() + 1;
        if(birthYear + birthMonth + birthDay) {
          if(!(Number(numbers[0]) > 0 && Number(numbers[0]) < Number(year))) message.push('Неверный год');
          if(!(Number(numbers[1]) > 0 && Number(numbers[1]) < 13)) message.push('Неверный месяц');
          if(!(Number(numbers[2]) > 0 && Number(numbers[2]) < 32)) message.push('Неверный день');
        };
        return message.join(', ')
        }
      }));
    },
    checkContactInformationZipCode: function() {
      if(this.entrant.contact_information.zip_code == '') return 'Необходимо указать почтовый индекс';
    },
    checkContactInformationAddress: function() {
      if(this.entrant.contact_information.address == '') return 'Необходимо указать адрес проживания';
    },
    checkContactInformationEmail: function() {
      if(this.entrant.contact_information.email == '') return 'Необходимо указать адрес электронной почты';
    },
    checkContactInformationPhone: function() {
      if(this.entrant.contact_information.phone == '') return 'Необходимо указать контактный телефон';
    },
    checkContragent: function() {
      if(!this.entrant.contragent.id || !this.entrant.contragent.last_name || !this.entrant.contragent.first_name || !this.entrant.contragent.birth_date || !this.entrant.contragent.identity_document_serie || !this.entrant.contragent.identity_document_number || !this.entrant.contragent.identity_document_date || !this.entrant.contragent.identity_document_issuer || !this.entrant.contragent.email || !this.entrant.contragent.phone || !this.entrant.contragent.address) return 'Необходимо заполнить данные заказчика договора на платную образовательную услугу';
    },
    isDisabled: function() {
      if(this.entrant.status == 'новый') {
        return false;
      }
      else {
        return true;
      }
    },
    checkPaidCompetitiveGroups: function(){
      var checkPaidCompetitiveGroups = false;
//       this.entrant.entrant_applications.find(function(element){
//         if(entrants.findCompetitiveGroup(element.campaign_id, element.competitive_group_id).education_source == 'С оплатой обучения') {
//           checkPaidCompetitiveGroups = true;
//         }
//       })
      return checkPaidCompetitiveGroups;
    },
    checkAge: function() {
      var minAge = 18;
      var numbers = this.entrant.personal.birth_date.split('-');
      var birthYear = Number(numbers[0]);
      var birthMonth = Number(numbers[1]) - 1;
      var birthDay = Number(numbers[2]);
      var tempDate = new Date(birthYear + minAge, birthMonth, birthDay);
      return (tempDate <= new Date());
    },
//     examDate: function() {
//       var examDate = false;
//       var currentDate = new Date();
//       this.findCampaign(this.entrant.campaign_id).competitive_groups.find(function(element){
//         var numbers = element.application_end_exam_date.split('-');
//         var year = Number(numbers[0]);
//         var month = Number(numbers[1]) - 1;
//         var day = Number(numbers[2]);
//         var date = new Date(year, month, day, 23, 59, 59)
//         if(currentDate <= date) {
//           examDate = true;
//         }
//       })
//       return examDate;
//     },
  },
  methods: {
    egeDate: function(competitive_group) {
      var egeDate = false;
      var currentDate = new Date();
      var termAdmissionDate = competitive_group.term_admissions.find(function(element) {
        if(element.name == 'Прием заявлений и документов без прохождения ДВИ и ВИ вуза') {
          return element.end_date
        }
      })
      if(currentDate > termAdmissionDate) {
          egeDate = true;
        }
      return egeDate;
    },
    consentCount: function() {
      var consentCount = 0;
      this.entrant.attachments.find(function(element) {
        if(element.document_type == 'consent_application' && !element.template) consentCount++;
      });
      return consentCount;
    },
    fillContragent: function() {
      this.entrant.contragent.last_name = this.entrant.personal.last_name;
      this.entrant.contragent.first_name = this.entrant.personal.first_name;
      this.entrant.contragent.middle_name = this.entrant.personal.middle_name;
      this.entrant.contragent.birth_date = this.entrant.personal.birth_date;
      this.entrant.contragent.email = this.entrant.contact_information.email;
      this.entrant.contragent.phone = this.entrant.contact_information.phone;
      this.entrant.contragent.address = this.entrant.contact_information.address;
      this.entrant.contragent.identity_document_number = this.entrant.identity_documents[0].number;
      this.entrant.contragent.identity_document_serie = this.entrant.identity_documents[0].serie;
      this.entrant.contragent.identity_document_date = this.entrant.identity_documents[0].date;
      this.entrant.contragent.identity_document_issuer = this.entrant.identity_documents[0].issuer;
      this.sendData('contragent', this.entrant.contragent);
    },
    withdrawCount: function() {
      var withdrawCount = 0;
      this.entrant.attachments.find(function(element) {
        if(element.document_type == 'withdraw_application' && !element.template) withdrawCount++;
      });
      return withdrawCount;
    },
    generateTemplates: function(){
      axios
      .put('/api/entrants/' + this.entrant.hash + '/generate_entrant_application', {id: this.entrant.id})
      .then(response => {
        console.log(response.data.message);
        this.entrant.attachments = response.data.attachments
      })
      axios
      .put('/api/entrants/' + this.entrant.hash + '/generate_consent_applications', {id: this.entrant.id})
      .then(response => {
        console.log(response.data.message);
        this.entrant.attachments = response.data.attachments
      })
      axios
      .put('/api/entrants/' + this.entrant.hash + '/generate_withdraw_applications', {id: this.entrant.id})
      .then(response => {
        console.log(response.data.message);
        this.entrant.attachments = response.data.attachments
      })
    },
    isApplicable: function(competitiveGroup) {
      if(competitiveGroup.education_source == 'С оплатой обучения' && competitiveGroup.entrance_category == 'Для иностранных граждан — обучение на русском языке' && this.entrant.nationality != 'Российская Федерация') {
        return true;
      };
      if(competitiveGroup.education_source == 'Квота приема лиц, имеющих особое право' && competitiveGroup.entrance_category == 'Специальная квота' && this.entrant.questionnaire['special']) {
        return true;
      };
      if(competitiveGroup.education_source == 'Квота приема лиц, имеющих особое право' && competitiveGroup.entrance_category == null && this.entrant.questionnaire['benefit']) {
        return true;
      };
      if(competitiveGroup.education_source == 'Основные места в рамках КЦП' || (competitiveGroup.education_source == 'С оплатой обучения' && competitiveGroup.entrance_category == null)) {
        return true;
      };
      if(competitiveGroup.education_source == 'Квота приема на целевое обучение') {
        for( var i = 0; i < this.entrant.target_contracts.length; i++ ) {
          if(competitiveGroup.id == this.entrant.target_contracts[i].competitive_group_id){
            return true;
          };
        };
      };
      return false;
    },
    findEntranceTestItem: function(subjectId) {
//       var findEntranceTestItem = {
//         subject_id: null,
//         min_score: null,
//         subject_name: ''
//       };
//       this.findCampaign(this.entrant.campaign_id).entrance_test_items.find(function(element) {
//         if(element.subject_id == subjectId){
//           findEntranceTestItem = element;
//         };
//       });
      return findEntranceTestItem;
    },
    findAchievement: function(institutionAchievementId) {
      var findAchievement = null;
      this.entrant.achievement_ids.find(function(element) {
        if(element == institutionAchievementId){
          findAchievement = element;
        };
      });
      return findAchievement;
    },
    findAttachment: function(document_id, document_type, template) {
      var findAttachment = null;
      this.entrant.attachments.find(function(element) {
        if(element.document_id == document_id && element.document_type == document_type && element.template == template){
          findAttachment = element;
        };
      });
      return findAttachment;
    },
    findCompetitiveGroup: function(campaignId, competitiveGgroupId) {
      var findCompetitiveGroup = null;
      this.api.dictionaries.campaigns.find(function(campaign) {
        if(campaign.id == campaignId) {
          campaign.competitive_groups.find(function(competitive_group) {
            if(competitive_group.id == competitiveGgroupId) {
              findCompetitiveGroup = competitive_group
            };
          });
        };
      });
      return findCompetitiveGroup;
    },
    openContragentModal: function(){
      $('#contragent').foundation('reveal', 'open');
    },
    closeContragentModal: function(){
      $('#contragent').foundation('reveal', 'close');
    },
//     generateContract: function(competitive_group_id) {
//       $('#contract_button').addClass('hide');
//       $('#contract_link').removeClass('hide');
//       axios
//       .put('/api/entrants/' + this.entrant.hash + '/generate_contracts', {id: this.entrant.id, competitive_group_id: competitive_group_id})
//       .then(response => {
//         console.log(response.data.message);
//         this.entrant.attachments = response.data.attachments
//       })
//     },
    sendData: function(sub, subData, index) {
      let data = {};
      data[sub] = subData;
      axios
      .put('/api/entrants/' + this.entrant.hash, data)
      .then(response => {
        if(response.data.result == 'success') {
          if(sub == 'identity_document') {
            this.entrant.identity_documents[index].id = response.data.identity_document.id;
          };
          if(sub == 'education_document') {
            this.entrant.education_documents[index].id = response.data.education_document.id;
          };
          if(sub == 'snils') {
            this.entrant.snils[index].id = response.data.snils.id;
          };
          if(sub == 'benefit_document') {
            this.entrant.benefit_documents[index].id = response.data.benefit_document.id;
          };
          if(sub == 'olympic_document') {
            this.entrant.olympic_documents[index].id = response.data.olympic_document.id;
          };
          if(sub == 'target_contract') {
            this.entrant.target_contracts[index].id = response.data.target_contract.id;
          };
          if(sub == 'other_document') {
            this.entrant.other_documents[index].id = response.data.other_document.id;
          };
          if(sub == 'ticket') {
            this.entrant.tickets = response.data.tickets;
          };
          if(sub == 'mark') {
            this.entrant.marks[index].id = response.data.mark.id;
          };
          if(sub == 'competitive_group_ids') {
            this.entrant.entrant_applications = response.data.entrant_applications;
            this.entrant.stage = response.data.stage;
            this.entrant.status = response.data.status;
          };
          if(sub == 'institution_achievement_ids') {
            this.entrant.achievements = response.data.achievements;
            this.entrant.attachments = response.data.attachments;
          };
          if(sub == 'status') {
            this.entrant.status = response.data.status;
          };
          if(sub == 'contragent') {
            this.entrant.contragent.id = response.data.contragent.id;
          };
          console.log('успешно обновлено');
        }
        else
        {
          console.log('что-то пошло не так');
        }
      });
    },
    handleFiles: function(e){
      if(this.$refs.entrant && this.$refs.entrant.files.length > 0) {
        this.files = this.$refs.entrant.files;
        this.dataset = this.$refs.entrant.dataset;
      }
      if(this.$refs.recall_application && this.$refs.recall_application.files.length > 0) {
        this.files = this.$refs.recall_application.files;
        this.dataset = this.$refs.recall_application.dataset;
      }
      if(this.$refs.consent_application && this.$refs.consent_application.files.length > 0) {
        this.files = this.$refs.consent_application.files;
        this.dataset = this.$refs.consent_application.dataset;
      }
      if(this.$refs.withdraw_application && this.$refs.withdraw_application.files.length > 0) {
        this.files = this.$refs.withdraw_application.files;
        this.dataset = this.$refs.withdraw_application.dataset;
      }
      if(this.$refs.contract && this.$refs.contract.files.length > 0) {
        this.files = this.$refs.contract.files;
        this.dataset = this.$refs.contract.dataset;
      }
      if(this.$refs.data_processing_consent && this.$refs.data_processing_consent.files.length > 0) {
        this.files = this.$refs.data_processing_consent.files;
        this.dataset = this.$refs.data_processing_consent.dataset;
      }
      if(this.$refs.medical_document && this.$refs.medical_document.files.length > 0) {
        this.files = this.$refs.medical_document.files;
        this.dataset = this.$refs.medical_document.dataset;
      }
      if(this.$refs.identity_document && this.$refs.identity_document.length > 0) {
        for(var i = 0; i < this.$refs.identity_document.length; i++) {
          if(this.$refs.identity_document[i].files.length > 0) {
          this.files = this.$refs.identity_document[i].files;
          this.dataset = this.$refs.identity_document[i].dataset;
          }
        }
      }
      if(this.$refs.education_document && this.$refs.education_document.length > 0) {
        for(var i = 0; i < this.$refs.education_document.length; i++) {
          if(this.$refs.education_document[i].files.length > 0) {
          this.files = this.$refs.education_document[i].files;
          this.dataset = this.$refs.education_document[i].dataset;
          }
        }
      }
      if(this.$refs.snils && this.$refs.snils.length > 0) {
        for(var i = 0; i < this.$refs.snils.length; i++) {
          if(this.$refs.snils[i].files.length > 0) {
          this.files = this.$refs.snils[i].files;
          this.dataset = this.$refs.snils[i].dataset;
          }
        }
      }
      if(this.$refs.benefit_document && this.$refs.benefit_document.length > 0) {
        for(var i = 0; i < this.$refs.benefit_document.length; i++) {
          if(this.$refs.benefit_document[i].files.length > 0) {
          this.files = this.$refs.benefit_document[i].files;
          this.dataset = this.$refs.benefit_document[i].dataset;
          }
        }
      }
      if(this.$refs.other_document && this.$refs.other_document.length > 0) {
        for(var i = 0; i < this.$refs.other_document.length; i++) {
          if(this.$refs.other_document[i].files.length > 0) {
          this.files = this.$refs.other_document[i].files;
          this.dataset = this.$refs.other_document[i].dataset;
          }
        }
      }
      if(this.$refs.olympic_document && this.$refs.olympic_document.length > 0) {
        for(var i = 0; i < this.$refs.olympic_document.length; i++) {
          if(this.$refs.olympic_document[i].files.length > 0) {
          this.files = this.$refs.olympic_document[i].files;
          this.dataset = this.$refs.olympic_document[i].dataset;
          }
        }
      }
      if(this.$refs.target_contract && this.$refs.target_contract.length > 0) {
        for(var i = 0; i < this.$refs.target_contract.length; i++) {
          if(this.$refs.target_contract[i].files.length > 0) {
          this.files = this.$refs.target_contract[i].files;
          this.dataset = this.$refs.target_contract[i].dataset;
          }
        }
      }
      if(this.$refs.achievement && this.$refs.achievement.length > 0) {
        for(var i = 0; i < this.$refs.achievement.length; i++) {
          if(this.$refs.achievement[i].files.length > 0) {
          this.files = this.$refs.achievement[i].files;
          this.dataset = this.$refs.achievement[i].dataset;
          }
        }
      }
      let formData = new FormData();
      for( var i = 0; i < this.files.length; i++ ){
        let file = this.files[i];
        formData.append('entrant_id', this.dataset.entrantId);
        formData.append('document_type', this.dataset.documentType);
        formData.append('document_id', this.dataset.documentId);
        formData.append('files[]', file);
      }
      axios
      .post( '/api/attachments',
        formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(
        response => {
        this.entrant.attachments = response.data.attachments;
        console.log(response.data.message);
        if(this.dataset.documentType == 'entrant') {
          this.$refs.entrant.value = null
        }
        if(this.dataset.documentType == 'consent_application') {
          this.$refs.consent_application.value = null
        }
        if(this.dataset.documentType == 'withdraw_application') {
          this.$refs.withdraw_application.value = null
        }
        if(this.dataset.documentType == 'contract') {
          this.$refs.contract.value = null
        }
        if(this.dataset.documentType == 'data_processing_consent') {
          this.$refs.data_processing_consent.value = null
        }
        if(this.dataset.documentType == 'medical_document') {
          this.$refs.medical_document.value = null
        }
        if(this.dataset.documentType == 'identity_document') {
          for(var i = 0; i < this.$refs.identity_document.length; i++) {
            this.$refs.identity_document[i].value = null
          }
        }
        if(this.dataset.documentType == 'snils') {
          for(var i = 0; i < this.$refs.snils.length; i++) {
            this.$refs.snils[i].value = null
          }
        }
        if(this.dataset.documentType == 'education_document') {
          for(var i = 0; i < this.$refs.education_document.length; i++) {
            this.$refs.education_document[i].value = null
          }
        }
        if(this.dataset.documentType == 'benefit_document') {
          for(var i = 0; i < this.$refs.benefit_document.length; i++) {
            this.$refs.benefit_document[i].value = null
          }
        }
        if(this.dataset.documentType == 'other_document') {
          for(var i = 0; i < this.$refs.other_document.length; i++) {
            this.$refs.other_document[i].value = null
          }
        }
        if(this.dataset.documentType == 'olympic_document') {
          for(var i = 0; i < this.$refs.olympic_document.length; i++) {
            this.$refs.olympic_document[i].value = null
          }
        }
        if(this.dataset.documentType == 'target_contract') {
          for(var i = 0; i < this.$refs.target_contract.length; i++) {
            this.$refs.target_contract[i].value = null
          }
        }
        if(this.dataset.documentType == 'achievement') {
          for(var i = 0; i < this.$refs.achievement.length; i++) {
            this.$refs.achievement[i].value = null
          }
        }
        if(this.dataset.documentType == 'recall_application') {
          for(var i = 0; i < this.$refs.recall_application.length; i++) {
            this.$refs.recall_application[i].value = null
          }
        }
        this.files = '';
        this.dataset = '';
      })
    },
    findCampaign: function(campaign_id) {
      var findCampaign = {
        name: '',
        id: null,
        campaign_type_id: null,
        year_start: null,
        admission_volumens: [],
        competitive_groups: [],
        institution_achievements: [],
        entrance_test_items: []
      };
      this.api.dictionaries.campaigns.find(function(element) {
        if(element.id == campaign_id){
          findCampaign = element;
        };
      });
      return findCampaign;
    },
    checkForm: function(tab) {
      this.errors = [];
      if(tab == 'benefits' || tab == 'target' || tab == 'competitions' || tab == 'others' || tab == 'applications'){
        if(this.entrant.personal.entrant_last_name == '') this.errors.push({element: 'entrant_last_name', message: 'Необходимо указать фамилию', level: 'red'});
        if(this.entrant.personal.first_name == '') this.errors.push({element: 'first_name', message: 'Необходимо указать имя', level: 'red'});
        if(this.entrant.personal.birth_date == '') this.errors.push({element: 'birth_date', message: 'Необходимо указать дату рождения', level: 'red'});
        if(this.entrant.personal.gender_id == '') this.errors.push({element: 'gender_id', message: 'Необходимо указать пол', level: 'red'});
        if(this.entrant.contact_information.phone == '') this.errors.push({element: 'phone', message: 'Необходимо контактный телефон', level: 'red'});
        if(!entrants.findAttachment(this.entrant.id, 'data_processing_consent', false)) entrants.errors.push({element: 'data_processing_consent_attachment', message: 'Необходимо прикрепить сканы согласий на обработку и распространение персональных данных', level: 'red'});
        if(this.entrant.snils.find(function(element) {
          if(element.number == ''){
            entrants.errors.push({element: 'snils', message: 'Необходимо указать номер СНИЛС, либо отметить, что он отсутствует', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'snils', false)) entrants.errors.push({element: 'snils_attachment', message: 'Необходимо прикрепить копию СНИЛС', level: 'red'});
        }));
        if(this.entrant.identity_documents.find(function(element) {
          if(element.document_category == ''){
            entrants.errors.push({element: 'identity_document_category', message: 'Необходимо выбрать тип документа, удостоверяющего личность', level: 'red'});
          };
          if(element.document_category == 'Паспорт гражданина РФ' && element.serie.length != 4){
            entrants.errors.push({element: 'identity_document_serie', message: 'Выбран тип документа Российский паспорт, но серия указана неправильно', level: 'red'});
          };
          if(element.document_category == 'Паспорт гражданина РФ' && element.number.length != 6){
            entrants.errors.push({element: 'identity_document_number', message: 'Выбран тип документа Российский паспорт, но номер указан неправильно', level: 'red'});
          };
          if(element.date == ''){
            entrants.errors.push({element: 'identity_document_date', message: 'Необходимо указать дату выдачи документа, удостоверяющего личность', level: 'red'});
          };
          if(element.issuer == ''){
            entrants.errors.push({element: 'identity_document_issuer', message: 'Необходимо указать кем выдан документ, удостоверяющий личность', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'identity_document', false)) entrants.errors.push({element: 'identity_document_attachment', message: 'Необходимо прикрепить копию документа, удостоверяющего личность', level: 'red'});
        }));
        if(this.entrant.education_documents.find(function(element) {
          if(element.document_category == ''){
            entrants.errors.push({element: 'education_document_category', message: 'Необходимо выбрать тип документа об образовании', level: 'red'});
          };
          if(element.number == ''){
            entrants.errors.push({element: 'education_document_number', message: 'Необходимо указать номер документа об образовании', level: 'red'});
          };
          if(element.date == ''){
            entrants.errors.push({element: 'education_document_date', message: 'Необходимо указать дату выдачи документа об образовании', level: 'red'});
          };
          if(element.issuer == ''){
            entrants.errors.push({element: 'education_document_issuer', message: 'Необходимо указать кем выдан документ об образовании', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'education_document', false)) entrants.errors.push({element: 'education_document_attachment', message: 'Необходимо прикрепить документ об образовании', level: 'red'});
        }));
      }
      if(tab == 'target' || tab == 'others' || tab == 'applications'){
        if(this.entrant.benefit_documents.find(function(element) {
          if(element.benefit_document_type == '' && entrants.entrant.questionnaire['benefit']){
            entrants.errors.push({element: 'benefit_document_type', message: 'Необходимо выбрать тип документа, подтверждающего льготу', level: 'red'});
          };
          if(element.benefit_document_series == '' && entrants.entrant.questionnaire['benefit']){
            entrants.errors.push({element: 'benefit_document_series', message: 'Не указана серия документа, подтверждающего льготу. Если серия отсутствует, напишите "нет"', level: 'red'});
          };
          if(element.benefit_document_number == '' && entrants.entrant.questionnaire['benefit']){
            entrants.errors.push({element: 'benefit_document_number', message: 'Не указан номер документа, подтверждающего льготу. Если номер отсутствует, напишите "нет"', level: 'red'});
          };
          if(element.benefit_document_date == '' && entrants.entrant.questionnaire['benefit']){
            entrants.errors.push({element: 'benefit_document_date', message: 'Необходимо указать дату выдачи документа, подтверждающего льготу', level: 'red'});
          };
          if(element.benefit_document_organization == '' && entrants.entrant.questionnaire['benefit']){
            entrants.errors.push({element: 'benefit_document_organization', message: 'Необходимо указать кем выдан документ, подтверждающий льготу', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'benefit_document', false) && entrants.entrant.questionnaire['benefit']) entrants.errors.push({element: 'benefit_document', message: 'Необходимо прикрепить копию документа, подтверждающего льготу', level: 'red'});
        }));
        if(this.entrant.olympic_documents.find(function(element) {
          if(element.olympic_document_series == '' && entrants.entrant.olympionic){
            entrants.errors.push({element: 'olympic_document_series', message: 'Не указана серия диплома олимпиады. Если серия отсутствует, напишите "нет"', level: 'red'});
          };
          if(element.olympic_document_number == '' && entrants.entrant.olympionic){
            entrants.errors.push({element: 'olympic_document_number', message: 'Не указан номер диплома олимпиады. Если номер отсутствует, напишите "нет"', level: 'red'});
          };
          if(element.class_number == '' && entrants.entrant.olympionic){
            entrants.errors.push({element: 'class_number', message: 'Необходимо указать в каком классе получен диплом олимпиады', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'olympic_document', false) && entrants.entrant.olympionic) entrants.errors.push({element: 'olympic_document', message: 'Необходимо прикрепить копию диплома олимпиады', level: 'red'});
        }));
      }
      if(tab == 'others' || tab == 'applications'){
        if(this.entrant.target_contracts.find(function(element) {
          if(element.document_type == ''){
            entrants.errors.push({element: 'target_contract_type', message: 'Необходимо выбрать конкурсную группу', level: 'red'});
          };
          if(element.date == ''){
            entrants.errors.push({element: 'target_contract_date', message: 'Необходимо указать дату заключения договора о целевом обучении', level: 'red'});
          };
          if(!entrants.findAttachment(element.id, 'target_contract', false)) entrants.errors.push({element: 'target_contract', message: 'Необходимо прикрепить копию договора о целевом обучении', level: 'red'});
        }));
        if(this.entrant.competitive_group_ids.length == 0) this.errors.push({element: 'competitive_group_ids', message: 'Необходимо отметить участие хотя бы в одном конкурсе', level: 'red'});
      }
      if(tab == 'applications'){
        if(!this.entrant.contact_information.address) this.errors.push({element: 'address', message: 'Необходимо указать адрес', level: 'red'});
        if(this.entrant.special_entrant && !this.entrant.questionnaire['benefit']) this.errors.push({element: 'special_entrant', message: 'Указана необходимость создания специальных условий для сдачи вступительных испытаний, но не указано наличие льготы на вкладке Льготы', level: 'red'});
        if(this.entrant.special_entrant && this.entrant.special_conditions == '') this.errors.push({element: 'special_conditions', message: 'Указана необходимость создания специальных условий для сдачи вступительных испытаний, но не указан перечень условий', level: 'red'});
      }
      if(tab == 'start'){
        if(!this.findAttachment(this.entrant.id, 'entrant_application', false)) this.errors.push({element: 'entrant_application_attachment', message: 'Необходимо прикрепить заявление о поступлении', level: 'red'});
      }
    },
    addIdentityDocument: function() {
      this.entrant.identity_documents.push({
        id: null,
        document_type: 'identity_document',
        document_category: '',
        serie: '',
        number: '',
        date: '',
        issuer: '',
        last_name: '',
        first_name: '',
        middle_name: ''
      });
    },
    deleteIdentityDocument: function() {
      if(this.entrant.identity_documents.length > 1) this.entrant.identity_documents.splice(-1, 1);
    },
    addTargetContract: function() {
      this.entrant.target_contracts.push({
        id: null,
        document_type: 'target_contract',
        document_category: '',
        serie: '',
        number: '',
        date: '',
        issuer: '',
        original: ''
      });
    },
    deleteTargetContract: function() {
      if(this.entrant.target_contracts.length > 1) this.entrant.target_contracts.splice(-1, 1);
    },
    addBenefitDocument: function() {
      this.entrant.benefit_documents.push({
        id: null,
        document_type: 'benefit_document',
        document_category: '',
        serie: '',
        number: '',
        date: '',
        issuer: '',
        original: ''
      });
    },
    deleteBenefitDocument: function() {
      if(this.entrant.benefit_documents.length > 1) this.entrant.benefit_documents.splice(-1, 1);
    },
    addOlympicDocument: function() {
      this.entrant.olympic_documents.push({
        id: null,
        document_type: 'olympic_document',
        document_category: '',
        serie: '',
        number: '',
        date: '',
        issuer: '',
        original: ''
      });
    },
    deleteOlympicDocument: function() {
      if(this.entrant.olympic_documents.length > 1) this.entrant.olympic_documents.splice(-1, 1);
    },
    addOtherDocument: function() {
      this.entrant.other_documents.push({
        id: null,
        document_type: 'other_document',
        document_category: '',
        serie: '',
        number: '',
        date: '',
        issuer: '',
        original: ''
      });
    },
    deleteOtherDocument: function() {
      if(this.entrant.other_documents.length > 1) this.entrant.other_documents.splice(-1, 1);
    },
    addTicket: function() {
      this.entrant.tickets.push({
        id: null,
        entrant_id: null,
        parent_ticket: null,
        message: '',
        solved: false,
        created_at: null,
        chidlren: []
      });
    },
    deleteTicket: function() {
      if(this.entrant.tickets.length > 1) this.entrant.tickets.splice(-1, 1);
    },
    specialityName: function(directionId) {
      var name = '';
      this.api.dictionaries.specialities_dictionary.find(function(element) {
        if(element.id == directionId) {
          name = element.name;
        }
      });
      return name;
    },
    findErrorMessage: function(fieldName) {
      var message = '';
      this.errors.find(function(element) {
        if(fieldName == element.element) {
          message = element.message;
        }
      });
      return message;
    },
    setCurrentTab: function(tab) {
      this.checkForm(tab);
      if(this.errors.length == 0){
        this.api.current_tab = tab;
        if(this.api.current_tab == 'applications' && this.entrant.stage < 4){
          this.generateTemplates();
        }
        if(this.api.current_tab == 'start' && this.entrant.stage == 0){
          this.sendData('stage', this.entrant.stage);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  },
  mounted: function() {
    axios
      .get('/api/entrants/' + this.api.hash)
      .then(
        response => {
          this.entrant = response.data.entrant;
          if(this.entrant.status != 'новый') this.api.current_tab = 'start';
          if(this.entrant.identity_documents.length == 0) this.entrant.identity_documents.push({
            id: null,
            document_type: 'identity_document',
            document_category: '',
            serie: '',
            number: '',
            date: '',
            issuer: '',
            last_name: '',
            first_name: '',
            middle_name: ''
          });
          if(this.entrant.education_documents.length == 0) this.entrant.education_documents.push({
            id: null,
            document_type: 'education_document',
            document_category: '',
            number: '',
            date: '',
            issuer: '',
            original: '',
          });
          if(this.entrant.snils.length == 0) this.entrant.snils.push({
            id: null,
            document_type: 'snils',
            number: '',
          });
          if(this.entrant.marks.length == 0) this.entrant.marks.push({
            id: null,
            value: null,
            subject_id: null,
            subject: '',
            form: '',
            checked: false,
            organization_uid: ''
          });
          if(this.entrant.achievements.length == 0) this.entrant.achievements.push({
            id: null,
            name: '',
            value: '',
            status: null
          });
          if(this.entrant.olympic_documents.length == 0) this.entrant.olympic_documents.push({
            id: null,
            document_type: 'olympic_document',
            document_category: '',
            number: '',
            date: '',
            class_number: '',
            original: ''
          });
          if(this.entrant.benefit_documents.length == 0) this.entrant.benefit_documents.push({
            id: null,
            document_type: 'benefit_document',
            document_category: '',
            serie: '',
            number: '',
            date: '',
            issuer: '',
            original: ''
          });
          if(this.entrant.other_documents.length == 0) this.entrant.other_documents.push({
            id: null,
            document_type: 'other_document',
            document_category: '',
            serie: '',
            number: '',
            date: '',
            issuer: '',
            original: ''
          });
          if(this.entrant.target_contracts.length == 0) this.entrant.target_contracts.push({
            id: null,
            document_type: 'target_contract',
            competitive_group_id: '',
            original: ''
          });
          if(!this.entrant.contragent) this.entrant.contragent = {
            id: null,
            last_name: '',
            first_name: '',
            middle_name: '',
            birth_date: '',
            identity_document_serie: '',
            identity_document_number: '',
            identity_document_date: '',
            identity_document_issuer: '',
            identity_document_data: '',
            email: '',
            phone: '',
            address: ''
          };
          for(var i = 0; i < this.entrant.campaigns.length; i++){
            axios
              .get('/api/campaigns/' + this.entrant.campaigns[i].id)
              .then(response => (this.api.dictionaries.campaigns.push(response.data.campaign)));
          };
        });
    axios
      .get('/api/dictionaries/57')
      .then(response => (this.api.dictionaries.specialities_dictionary = response.data.dictionary.items));
    axios
      .get('/api/dictionaries/30')
      .then(response => (this.api.dictionaries.countries = response.data.dictionary.items));
    axios
      .get('/api/dictionaries/67')
      .then(response => (this.api.dictionaries.identity_document_categories = response.data.dictionary.items));
  }
})
