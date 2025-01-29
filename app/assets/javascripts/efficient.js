var efficient = new Vue({
  el: '#efficient',
  data: {
    efficient: {
      chapter: null, 
      point: null,
      file: null,
      link: null,
      search: null,
    },
    chapters: [],
    points: []
  },
  computed: {
    
  },
  watch: {
    
  },
  methods: {
    handleFileUpload(event) {
      this.efficient.file = event.target.files;
    },
    findPoint: function(point_id) {
      var findPoint = false;
      this.points.find(function(point) {
        if(point.id == point_id) {
          findPoint = point
        };
      });
      return findPoint;
    },
  },
  created: function() {
    axios
    .get('/api/criteria')
    .then(response => {
      this.points = response.data.array;
      this.chapters = [...new Set(this.points.map(item => item.chapter))];
    });
    },
  mounted: function () {
    
  },
})
