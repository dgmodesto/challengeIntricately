<template>
  <div class="conteinarFooter">
    <footer>
      <div class="left">
        <div class="row">
          <a href>
            <p>Pricing</p>
          </a>
          <p>|</p>
          <a href>
            <p>Blog</p>
          </a>
          <p>|</p>
          <a href>
            <p>Webinars</p>
          </a>
          <p>|</p>
          <a href>
            <p>Events</p>
          </a>
          <p>|</p>
          <a href>
            <p>Help Center</p>
          </a>
        </div>
        <div class="row corp">
          <p>&copy;Copyright 2019, Intricately, Inc. All Rights Reserved</p>
        </div>
      </div>

      <div class="right">
        <div class="row">
          <a href>
            <p>Terms and Conditions</p>
          </a>
          <p>|</p>
          <a href>
            <p>Privacy Policy</p>
          </a>
        </div>
        <div class="row icons-footer">
          <p>
            <a href>
              <img src="../assets/icon-linkedIn.png" alt="linkedin" />
            </a>
            <a href>
              <img src="../assets/icon-facebook.png" alt="facebook" />
            </a>
            <a href>
              <img src="../assets/icon-twitter.png" alt="twitter" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "cFooter"
};
</script>

<style scoped>
footer {
  background: #f3f3f3;
  grid-area: footer;
  position: relative;
  margin-bottom: 0;
  padding: 2rem;
}

footer p {
  margin-left: 1rem;
  color: rgba(93, 103, 154, 1);
  font-size: small;
}

footer .left {
  float: left;
  margin-left: 5rem;
}

footer .left .corp p {
  color: #999;
}

footer .right {
  float: right;
  margin-right: 5rem;
}

footer .right .icons-footer {
  margin-left: 50%;
}
</style>
