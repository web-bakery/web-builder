<template>
    <footer>
        <div class="footer-left">
            <router-link class="nav-item nav-logo" to="/">
                <img src="@/assets/logo.png">
                <span>Website Title</span>         
            </router-link>
        </div>
        <div class="footer-right">
            <div class="social-links">
                <a class="social-link" href="">
                    <img :src="'@/assets/socials/' + socialLinks[0] + '.svg'" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
      socialLinks: [
        'twitter',
        'medium',
        'github'
      ]
    })
};
</script>
