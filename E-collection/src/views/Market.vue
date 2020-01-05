<template>
<body
  class="vertical-layout vertical-menu-modern 2-columns navbar-floating footer-static"
  data-open="click"
  data-menu="vertical-menu-modern"
  data-col="2-columns"
>
  <!-- BEGIN: Main Menu-->
  <div
    class="main-menu menu-fixed menu-light menu-accordion menu-shadow"
    data-scroll-to-active="true"
  >
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <a class="navbar-brand">
            <div class="brand-logo"></div>
            <h2 class="brand-text mb-0">E-Collection</h2>
          </a>
        </li>
        <li class="nav-item nav-toggle">
          <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
            <i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
            <i
              class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
              data-ticon="icon-disc"
            ></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li class="nav-item has-sub">
          <a href="index.html">
            <i class="feather icon-home"></i>
            <span class="menu-title" data-i18n="Dashboard">Home</span>
            <span class="badge badge badge-warning badge-pill float-right mr-2"></span>
          </a>
        </li>
        <li class="navigation-header">
          <span>Apps</span>
        </li>
        <li class="nav-item">
          <a href="app-email.html">
            <i class="feather icon-mail"></i>
            <span class="menu-title" data-i18n="Email">Email</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="app-chat.html">
            <i class="feather icon-message-square"></i>
            <span class="menu-title" data-i18n="Chat">Chat</span>
          </a>
        </li>
        <li class="nav-item has-sub">
          <a href="#">
            <i class="feather icon-shopping-cart"></i>
            <span class="menu-title" data-i18n="Ecommerce">Ecommerce</span>
          </a>
          <!-- <ul class="menu-content">
            <li class="active">
              <a href="app-ecommerce-shop.html">
                <i class="feather icon-circle"></i>
                <span class="menu-item" data-i18n="Shop">Shop</span>
              </a>
            </li>
            <li>
              <a href="app-ecommerce-wishlist.html">
                <i class="feather icon-circle"></i>
                <span class="menu-item" data-i18n="Wish List">Wish List</span>
              </a>
            </li>
            <li>
              <a href="app-ecommerce-checkout.html">
                <i class="feather icon-circle"></i>
                <span class="menu-item" data-i18n="Checkout">Checkout</span>
              </a>
            </li>
          </ul>-->
        </li>
      </ul>
    </div>
  </div>
  <!-- END: Main Menu-->

  <!-- BEGIN: Content-->
  <div class="app-content content">
    <!-- BEGIN: Header-->
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <nav
      class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
    >
      <div class="navbar-wrapper">
        <div class="navbar-container content">
          <div class="navbar-collapse" id="navbar-mobile">
            <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
              <ul class="nav navbar-nav">
                <li class="nav-item mobile-menu d-xl-none mr-auto">
                  <a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                    <i class="ficon feather icon-menu"></i>
                  </a>
                </li>
              </ul>
              <ul class="nav navbar-nav bookmark-icons">
                <!-- li.nav-item.mobile-menu.d-xl-none.mr-auto-->
                <!--   a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')-->
                <!--     i.ficon.feather.icon-menu-->
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    href="app-chat.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Chat"
                  >
                    <i class="ficon feather icon-message-square"></i>
                  </a>
                </li>
                <li class="nav-item d-none d-lg-block">
                  <a
                    class="nav-link"
                    href="app-email.html"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Email"
                  >
                    <i class="ficon feather icon-mail"></i>
                  </a>
                </li>
              </ul>
              <ul class="nav navbar-nav">
                <li class="nav-item d-none d-lg-block">
                  <a class="nav-link bookmark-star">
                    <i class="ficon feather icon-star warning"></i>
                  </a>
                  <div class="bookmark-input search-input">
                    <div class="bookmark-input-icon">
                      <i class="feather icon-search primary"></i>
                    </div>
                    <input
                      class="form-control input"
                      type="text"
                      placeholder="Explore Vuesax..."
                      tabindex="0"
                      data-search="template-list"
                    />
                    <ul class="search-list"></ul>
                  </div>
                  <!-- select.bookmark-select-->
                  <!--   option Chat-->
                  <!--   option email-->
                  <!--   option todo-->
                  <!--   option Calendar-->
                </li>
              </ul>
            </div>
            <ul class="nav navbar-nav float-right">
              <li class="nav-item d-none d-lg-block">
                <a class="nav-link nav-link-expand">
                  <i class="ficon feather icon-maximize"></i>
                </a>
              </li>
              <li class="nav-item nav-search">
                <a class="nav-link nav-link-search">
                  <i class="ficon feather icon-search"></i>
                </a>
                <div class="search-input">
                  <div class="search-input-icon">
                    <i class="feather icon-search primary"></i>
                  </div>
                  <input
                    class="input"
                    type="text"
                    placeholder="Explore Vuesax..."
                    tabindex="-1"
                    data-search="template-list"
                  />
                  <div class="search-input-close">
                    <i class="feather icon-x"></i>
                  </div>
                  <ul class="search-list"></ul>
                </div>
              </li>
              <li class="dropdown dropdown-notification nav-item">
                <a class="nav-link nav-link-label" href="#" data-toggle="dropdown">
                  <i class="ficon feather icon-bell"></i>
                  <span class="badge badge-pill badge-primary badge-up">5</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li class="dropdown-menu-header">
                    <div class="dropdown-header m-0 p-2">
                      <h3 class="white">5 New</h3>
                      <span class="notification-title">App Notifications</span>
                    </div>
                  </li>
                  <li class="scrollable-container media-list">
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-plus-square font-medium-5 primary"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="primary media-heading">You have new order!</h6>
                          <small class="notification-text">Are your going to meet me tonight?</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">9 hours ago</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-download-cloud font-medium-5 success"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="success media-heading red darken-1">99% Server load</h6>
                          <small class="notification-text">You got new order of goods.</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">5 hour ago</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-alert-triangle font-medium-5 danger"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="danger media-heading yellow darken-3">Warning notifixation</h6>
                          <small class="notification-text">Server have 99% CPU usage.</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Today</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-check-circle font-medium-5 info"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="info media-heading">Complete the task</h6>
                          <small class="notification-text">Cake sesame snaps cupcake</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Last week</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-file font-medium-5 warning"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="warning media-heading">Generate monthly report</h6>
                          <small class="notification-text">Chocolate cake oat cake tiramisu marzipan</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Last month</time>
                        </small>
                      </div>
                    </a>
                  </li>
                  <li class="dropdown-menu-footer">
                    <a
                      class="dropdown-item p-1 text-center"
                      href="javascript:void(0)"
                    >Read all notifications</a>
                  </li>
                </ul>
              </li>
              <li class="dropdown dropdown-user nav-item">
                <a
                  class="dropdown-toggle nav-link dropdown-user-link"
                  href="#"
                  data-toggle="dropdown"
                >
                  <div class="user-nav d-sm-flex d-none">
                    <span class="user-name text-bold-600">{{pseudo}}</span>
                    <span class="user-status">Available</span>
                  </div>
                  <span>
                    <img
                      class="round"
                      src="../assets/app-assets/images/portrait/small/avatar-s-11.png"
                      alt="avatar"
                      height="40"
                      width="40"
                    />
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="page-user-profile.html">
                    <i class="feather icon-user"></i> Edit Profile
                  </a>
                  <a class="dropdown-item" href="app-email.html">
                    <i class="feather icon-mail"></i> My Inbox
                  </a>
                  <a class="dropdown-item" href="app-todo.html">
                    <i class="feather icon-check-square"></i> Task
                  </a>
                  <a class="dropdown-item" href="app-chat.html">
                    <i class="feather icon-message-square"></i> Chats
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="auth-login.html">
                    <i class="feather icon-power"></i> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- END: Header-->

    <div class="content-wrapper">
      <div class="content-header row">
        <div class="content-header-left col-md-9 col-12 mb-2">
          <div class="row breadcrumbs-top">
            <div class="col-12">
              <h2 class="content-header-title float-left mb-0">Collections Market</h2>
            </div>
          </div>
        </div>
        <div class="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
          <div class="form-group breadcrum-right">
            <div class="dropdown">
              <button
                class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="feather icon-settings"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">Chat</a>
                <a class="dropdown-item" href="#">Email</a>
                <a class="dropdown-item" href="#">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <!-- Data list view starts -->
        <section id="data-thumb-view" class="data-thumb-view-header">
          <div class="action-btns d-none">
            <div class="btn-dropdown mr-1 mb-1">
              <div class="btn-group dropdown actions-dropodown">
                <button
                  type="button"
                  class="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Actions</button>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">Delete</a>
                  <a class="dropdown-item" href="#">Archive</a>
                  <a class="dropdown-item" href="#">Print</a>
                  <a class="dropdown-item" href="#">Another Action</a>
                </div>
              </div>
            </div>
          </div>
          <!-- dataTable starts -->
          <div class="table-responsive">
            <table class="table data-thumb-view">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>NAME</th>
                  <th>CATEGORY</th>
                  <th>POPULARITY</th>
                  <th>ORDER</th>
                  <th>PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in form" :key="item" style="font-size: 20px">
                  <td></td>
                  <td class="product-img" style="width:400px; height:300px;">
                    <img
                      v-bind:src= "item.picture"
                      alt="Img placeholder"
                      style="max-width: 100%; max-height: 100%"
                    />
                  </td>
                  <td class="product-name">{{item.name}}</td>
                  <td class="product-category">{{item.category}}</td>
                  <td>
                    <div :class="item.bartype">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="40"
                        aria-valuemin="40"
                        aria-valuemax="100"
                        v-bind:style = "{width: item.popularity + '%'}"
                      ></div>
                    </div>
                  </td>
                  <td>
                    <Button type="primary" class="buy_item" :data-id="item.id" ghost>Buy</Button>
                  </td>
                  <td class="product-price">$ {{item.price}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- dataTable ends -->

        </section>
        <!-- Data list view end -->
      </div>
    </div>
  </div>
  <!-- END: Content-->

  <div class="sidenav-overlay"></div>
  <div class="drag-target"></div>
</body>
</template>

<script>
import Buy from '../js/buy'
import Users from '../js/users'

export default {
  name: "market",
  data() {
    return {
      pseudo: undefined,
      form_origin: Buy.init_items()
    };
  },
  computed: {
    form: function(){
        let form_rec = this.form_origin
        for(let i=0; i<form_rec.length; i++){
            let popularity_rec = parseInt(form_rec[i].popularity)
            if(popularity_rec < 30){
                form_rec[i].bartype = "progress progress-bar-danger"
            }else if(popularity_rec < 60){
                form_rec[i].bartype = "progress progress-bar-warning"
            }else if(popularity_rec < 90){
                form_rec[i].bartype = "progress progress-bar-primary"
            }else{
                form_rec[i].bartype = "progress progress-bar-success"
            }
        }
        return form_rec
    }
  },
  beforeCreate: function (){
    Users.init().then(() => {
      Users.exists(window.web3.eth.accounts[0]).then((exists) => {
        if (exists) {
          Users.authenticate().then(pseudo => {
            this.pseudo = pseudo
          })
        }
      })
    }).catch(err => {
      console.log(err)
    })

    Buy.init()
  },

};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600";

@import "../assets/app-assets/vendors/css/vendors.min.css";
@import "../assets/app-assets/vendors/css/file-uploaders/dropzone.min.css";
@import "../assets/app-assets/vendors/css/tables/datatable/datatables.min.css";
@import "../assets/app-assets/vendors/css/tables/datatable/extensions/dataTables.checkboxes.css";

@import "http://cdn.bootstrapmb.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "../assets/app-assets/css/bootstrap-extended.css";
@import "../assets/app-assets/css/colors.css";
@import "../assets/app-assets/css/components.css";
@import "../assets/app-assets/css/themes/dark-layout.css";
@import "../assets/app-assets/css/themes/semi-dark-layout.css";

@import "../assets/app-assets/css/core/menu/menu-types/vertical-menu.css";
@import "../assets/app-assets/css/core/colors/palette-gradient.css";
@import "../assets/app-assets/css/plugins/file-uploaders/dropzone.css";
@import "../assets/app-assets/css/pages/data-list-view.css";

@import "../assets/assets/css/style.css";
</style>
