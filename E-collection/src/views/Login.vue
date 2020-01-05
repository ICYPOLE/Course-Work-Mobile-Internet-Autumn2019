<template>
<body
  class="vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image menu-collapsed blank-page blank-page"
  data-open="click"
  data-menu="vertical-menu-modern"
  data-col="1-column"
>
  <div class="app-content content">
    <div class="content-wrapper">
      <div class="content-header row"></div>
      <div class="content-body">
        <section class="row flexbox-container">
          <div class="col-xl-8 col-11 d-flex justify-content-center">
            <div class="card bg-authentication rounded-0 mb-0">
              <div class="row m-0">
                <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                  <img src="../assets/app-assets/images/pages/login.png" alt="branding logo" />
                </div>
                <div class="col-lg-6 col-12 p-0">
                  <div class="card rounded-0 mb-0 px-2">
                    <div class="card-header pb-1">
                      <div class="card-title">
                        <h4 class="mb-0">Login</h4>
                      </div>
                    </div>
                    <p class="px-2">Welcome back, please login to your account.</p>
                    <div class="card-content">
                      <div class="card-body pt-1">
                        <form>
                          <fieldset
                            class="form-label-group form-group position-relative has-icon-left"
                          >
                            <input
                              v-model="form.pseudo"
                              type="text"
                              class="form-control"
                              id="user-name"
                              placeholder="Username"
                              required
                            />
                            <div class="form-control-position">
                              <i class="feather icon-user"></i>
                            </div>
                            <label for="user-name">Username</label>
                          </fieldset>

                          <fieldset class="form-label-group position-relative has-icon-left">
                            <input
                              v-model="form.password"
                              type="password"
                              class="form-control"
                              id="user-password"
                              placeholder="Password"
                              required
                            />
                            <div class="form-control-position">
                              <i class="feather icon-lock"></i>
                            </div>
                            <label for="user-password">Password</label>
                          </fieldset>
                          <div class="form-group d-flex justify-content-between align-items-center">
                            <div class="text-left">
                              <fieldset class="checkbox">
                                <div class="vs-checkbox-con vs-checkbox-primary">
                                  <input type="checkbox" />
                                  <span class="vs-checkbox">
                                    <span class="vs-checkbox--check">
                                      <i class="vs-icon feather icon-check"></i>
                                    </span>
                                  </span>
                                  <span class>Remember me</span>
                                </div>
                              </fieldset>
                            </div>
                            <div class="text-right">
                              <a href="auth-forgot-password.html" class="card-link">Forgot Password?</a>
                            </div>
                          </div>
                          <a
                            href="auth-register.html"
                            class="btn btn-outline-primary float-left btn-inline"
                          >Register</a>
                          <button
                            @click="signup"
                            class="btn btn-primary float-right btn-inline"
                          >Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</body>
</template>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600";

@import "../assets/app-assets/vendors/css/vendors.min.css";

@import "http://cdn.bootstrapmb.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "../assets/app-assets/css/bootstrap-extended.css";
@import "../assets/app-assets/css/colors.css";
@import "../assets/app-assets/css/components.css";
@import "../assets/app-assets/css/themes/dark-layout.css";
@import "../assets/app-assets/css/themes/semi-dark-layout.css";

@import "../assets/app-assets/css/core/menu/menu-types/vertical-menu.css";
@import "../assets/app-assets/css/core/colors/palette-gradient.css";
@import "../assets/app-assets/css/pages/authentication.css";

@import "../assets/assets/css/style.css";
</style>

<script>
import Users from "@/js/users";

export default {
  name: "login",
  data() {
    return {
      form: {
        pseudo: undefined,
        password: undefined
      }
    };
  },
  beforeCreate: function() {
    Users.init()
      .then(() => {
        Users.exists(window.web3.eth.accounts[0]).then(exists => {
          if (exists) {
            Users.authenticate().then(pseudo => {
              this.form.pseudo = pseudo;
              this.$router.push("/market");
            });
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    signup: function() {
      let self = this;
      if (typeof this.form.pseudo !== "undefined" && this.form.pseudo !== "") {
        console.log(this.form.pseudo);
        Users.create(this.form.pseudo, this.form.password)
          .then(tx => {
            console.log(tx);
            self.$router.push("/market");
            console.log("succcccccccccccccc");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

