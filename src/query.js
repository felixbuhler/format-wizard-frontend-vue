export default {
  data() {
      return {
          loading: true,
          posts: [],
      };
  },
  created() {
      this.fetchData();
  },
  methods: {
      fetchData() {
          this.error = this.post = null;
          this.loading = true;
          sanity.fetch(query).then(
              (posts) => {
                  this.loading = false;
                  this.posts = posts;
              },
              (error) => {
                  this.error = error;
              }
          );
      },
  },
};