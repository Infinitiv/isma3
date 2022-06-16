var entrants = new Vue({
  el: '#entrant',
  data: {
    api: {
      campaigns: null,
    },
    entrant: {
      campaign_id: '',
      email: '',
      pin: '',
      response: null,
      error: null,
      message: '',
      email_confirmed: false,
      hash: null,
      errors: [],
      clerk: '',
      questionnaire: [],
    },
  },
  computed: {
    isNextDisabled: function() {
      if(this.entrant.email_confirmed && this.entrant.hash) {
        return false
      }
      else {
        return true
      }
    },
    isSendCodeDisabled: function() {
      const expression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return !expression.test(String(this.entrant.email).toLowerCase()) || this.entrant.campaign_id == '';
    }
  },
  methods: {
    sendWelcomeEmail: function() {
      axios
        .put('/api/entrants/' + this.entrant.hash + '/send_welcome_email', {id: this.entrant.hash})
        .then(response => {
          console.log(response.data.message);
        })
    },
    findCampaign: function(campaignId) {
      var find_campaign = null;
      this.api.campaigns.find(function(element) {
        if(campaignId == element.id){
          find_campaign = element;
        };
      });
      return find_campaign;
    },
    checkPin: function() {
      if(this.entrant.pin.length == 4) {
        console.log(this.entrant.pin);
        this.confirmEmail();
      };
    },
    checkForm: function(e) {
      this.entrant.errors = [];
      if(this.entrant.email == '') this.entrant.errors.push({element: 'email', message: 'Необходимо указать адрес электронной почты', level: 'red'});
      if(this.entrant.campaign_id == '') this.entrant.errors.push({element: 'campaign_id', message: 'Необходимо выбрать приемную кампанию', level: 'red'});
      if(this.entrant.errors.length == 0) return true;
      e.preventDefault();
    },
    checkEmail: function() {
      this.entrant.errors = [];
      axios
        .post('/api/entrants/check_email', {email: this.entrant.email})
        .then(response => {
          if(response.data.status == 'faild') {
            this.entrant.errors.push({element: 'email', message: 'Адрес электронной почты уже зарегистрирован в системе. Личный кабинет Вами уже создан. Для входа в личный кабинет необходимо использовать ссылку, полученную по почте. Если нет письма со ссылкой, обратитесь в приемную комиссию по телефону или электронной почте. Не создавайте дублирующиеся личные кабинеты.', level: 'red'});
          }
          if(response.data.status == 'success'){
            $('#email_code_field').foundation('reveal', 'open');
            this.sendCode();
          }
        })
    },
    sendCode: function() {
      axios
        .post('/api/entrants', { campaign_id: this.entrant.campaign_id, email: this.entrant.email, clerk: this.$refs.clerk.dataset.clerk })
        .then(response => {
          if(response.data.status == 'success') {
            this.entrant.hash = response.data.hash;
            this.entrant.entrant_id = response.data.id
          }
          if(response.data.status == 'faild') {
            console.log('что-то пошло не так')
          }
      })
    },
    findErrorMessage: function(fieldName) {
      var message = '';
      this.entrant.errors.find(function(element) {
        if(fieldName == element.element) {
          message = element.message;
        }
      });
      return message;
    },
    confirmEmail: function () {
      axios
        .put( '/api/entrants/' + this.entrant.hash + '/check_pin', { hash: this.entrant.hash, pin: this.entrant.pin } )
        .then(response => {
          if(response.data.status == 'success') {
            this.entrant.email_confirmed = true;
            this.entrant.message = 'код подтверждения успешно проверен';
            $('#email_code_field').foundation('reveal', 'close');
            this.sendWelcomeEmail();
          }
          else
          {
            this.entrant.email_confirmed = false;
            this.entrant.message = 'код подтверждения введен неверно';
            this.entrant.errors.push({element: 'pin', message: 'Код подтверждения введен неверно', level: 'red'});
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    },
    checkEmailDecline: function() {
      axios
        .put( '/api/entrants/' + this.entrant.hash + '/remove_pin', { hash: this.entrant.hash } )
        .then(response => {
          if(response.data.status == 'success') {
            this.entrant.email_confirmed = true;
            this.entrant.message = 'отказ от проверки подтвержден';
            $('#email_code_field').foundation('reveal', 'close');
            this.sendWelcomeEmail();
          }
        })
        .catch(function (error) {
          console.log(error)
        });
    }
  },
  mounted: function() {
    axios
      .get('/api/campaigns')
      .then(response => (this.api.campaigns = response.data.campaigns));
  }
})
