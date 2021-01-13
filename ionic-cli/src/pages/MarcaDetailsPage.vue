<template>
    <base-layout :pageTitle="loadedMarca.marca" pageDefaultBackLink="/marcas">
      <marca-overview :marca="loadedMarca.marca" :image="image"></marca-overview>
    </base-layout>

</template>

<script>
import MarcaOverview from '../components/marcas/MarcaOveview.vue';
import MarcaService from '../services/marca.service';

export default {
  components: {
    MarcaOverview
  },
  data() {
    return {
      loadedMarca: {id: -1, marca: "No se ha encontrado"},
      image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAjVBMVEX///8jICEAAAAgHR4dGhsbGBkXExT7+/v19fUaFhfv7+8TDxAQCw0EAAD4+PgLAwbo6Ojb29tlZGS3trZgXl9ta2xAPT6ioaHh4eGqqarMy8uNjIyXlpZSUFHU09QpJidKSEkyMDCzsrJ/fn54d3fEw8NPTU6dnJwuKyxaWFl9fH2Rj5CIhoc5NzjNzc1xqIn8AAAG2UlEQVR4nO3c2WKqOhQG4MMiIgiIs2KtWodWq/b9H+8EorutgoSQkGjXd9WbAkbWTyb87z+EEEIIIYQQQgghhBBCCCGEEEIIIYQQQrK5ui/gUUziHsBc91U8gFZ/4wHAqa/7Qkznbo8jAD+C3lT3pZitOZ+9RuATAv5Lp+w//6mAm8QDD4KGZXlwWjVL//t0ouCajERDyofIsy3LDqD3JXCEzkb6RZmIhtQJQoc2lGURIOXrL9EkQv/2UNo0pGiaEyvlwFKg/lL7ntwLM043HjTSkErR+hsKd6uO0JV5ZYbprDY2CymGQDRrCR8thneJ12YUGlKLS0hd6m9Upf85B3jK7mv7a/ZOQ+pHQ9H6C8XrL9HyCBGMOoN1xwMfAmL9RMCqUH+ppecf5VygKTqr4eJnSP17/lUuoE1kPVO8u9v17ndIXZ5/m+qfMgbLfpNwkSZofs2WVyHFNGDxIWE41wXLCmbVj6MfDanwOqQYH163Ms7QTgr78avwHFIZDWXZkYz6S+0dejhfzrE0aW3Xbxkhdak/eyxrOmUGyV26lnS0+jWnh1FmSLGbSlb9paZJW1kg74C1oiEF2SGVIlHwKTFfXDv9SqBiP00HGlIWRI28hkrq701a/aWSwLIer+NAQ+qUG1KMD3vJ5TJOi9ByHmraj4VUbu2x+oO17GnfLmsrKxpLPrAy3fH+XkgxHrzF8ke6b+ezPka+05Byvifv8tBBzUDFotY6OJ8AjJ9QbvU/i0KK1V/oH5Usu2zhcoqwreL4srRpSIUFIfVdf2o+Stu+fE/2wty5rO7Ha3FI/as/kUUtLkP/3707UnWOaiarIRSH1PkzgCO2qMXluwgtYuD0Ow2pt5xxcQYHRqKLWjyawXdYNvbqziPCnb4sAYrT/CxZ1FJWf6nvIjSsseYfrwFfSJ3LAoKD4of5FH6ez5QyTDeUcYYUU3FRi0tz9/OrMyLgaUjlTd7lqbSozO8l+nVS3V2HkiF1/ophMaujMz2B3+cFnRuzyoYUI2NRi8/7VSxom4GnIcUx3LshZ1GLT//qxrLCVU1n/qnV3zi3y6AcGmDJWNTidDNh7XzWdm6G7XotGVKM1En1Yofo+gLsXY2nb9KQ4hsX37KjsLb6S3Wui9CqMbQm8YAIhBTTgIXcSfViQ+f2MoJDDSemIWULhVRK7qIWp27GjUVvb8Vn/bnrVQQJA+mT6hz2mZ1klVvZmr92vYpIJvV0dAW/sm4s+s2pWgyrFFKMDwNNawTX/dGLMJZ/rk5/k7GhrBwSgppJdQ7T7BsrSS25i9Lt7TFrQ1lJaha1eC1zC8KRN6l1DqmKDZW+KaLzTa153o1FgZzuAw0pkeHeDQINhZPqPAb35ougcmzRkNpVDSnGg9FK8/rc9dTMdWtV6T/QkMrfUFZOUn/6X8D99O9fJYjueZjn7HoVQevvYMAOKDco+jggsJ1mEvdydr2KqG9Sr0AcFl5rcCp1/3dWw13JifN7kkk9/fXHjDi+fgJrzoFF1eFexqntqm+KyJM5hL7lh4fi5mJb82XVXsKY+mPWBfF+UVQMBbteRdQ+qVeoRP/Hgd1xm3F/NSerjSUxpBhP9k7Z6nKHhZlsH8LRZrztdlpuu+22Ot1tfHy1pIYUI3+nrAS8VfiNOBHQgvMIcQL6R+Q3ZDdU8qaIjkm9QpHoJ7VtW3ojMR7sFO3Uq4jzWVifZKeeefXHjIPi668RCR1tk3rFsufeNfFgZGb9nUl/igkT/fmX+hTMztSHgGfCpMJd/eJBdB0MG9TkmBmQ7yZNKtzV057vBMiH6fV3xjM9o5D9GPV3ttP5MLSjyLBJhbtc+cM6btJfv1WtdbOBrS5GTirc19LTc9C5U0GclsbSu1NBXKv2bpb5g5pcbavegCdgq379SKFTnY2l+PU/5V6r72vhVNPrRyq91BRaDbBrfP1BkZtXUJTQsf1agaxXBSSzo3D9QIOae1SPpA1cKRU3VjngUfWbJrq46uqQgHd83E5VpqJtf6Iq/FC4uVoqbi07evhOVbaZ9NZqPM5McWkjqfPwWt5pq09HeG/ILQImL7/LsJVViI7hy+9SSBn0JL+++5Shfq0PVSvRqf9FZW3mTsYr0txIpPrXl8zSehctRfr4G/2Zm+riACJj6gY46z+RVFfmp7LJRctv33+6MQ2nMRS+8/SrpUbxs3bUebRfQq4equ2FsBw/2ZRCee5sAQUPRhKAP4j/fEsx22HuG5W2FwAsX6Z/7eF3T/quLkS+R85tZtvECUIApzfDhsrgfsXHwakRRFTg7N43h9X8L8c5l7brPv3YGCGEEEIIIYQQQgghhBBCCCGEEEIIIYTk+h+nBW2h3hL8DAAAAABJRU5ErkJggg=='
    }
  },
  created() {
    this.getMarcaById();
  },
  methods: {
    async getMarcaById() {
      MarcaService.getMarcaById(this.$route.params.id).then(
        res => {
          this.loadedMarca = res.data;
      }).catch(err =>  {
        console.log(err.response);
      });
    }
  }
}
</script>