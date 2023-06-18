<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mt-3.mb-4(data-aos="fade-left") A continuación, se describe el tema principal del Componente Formativo CF18 Gestión del mantenimiento de productos electrónicos, por medio de la descripción de la función del mantenimiento, la cual es esencial para garantizar el rendimiento óptimo y la vida útil de los equipos electrónicos. Para llevar a cabo esta tarea, se requiere una gestión efectiva de los recursos, incluyendo la calidad del mantenimiento, la gestión de la información y el manejo del cambio. También es importante documentar adecuadamente el mantenimiento, incluyendo manuales de usuario y del fabricante, hojas de vida de equipos y órdenes de servicio. Además, es fundamental considerar los costos y presupuestos de mantenimiento, así como la gestión de repuestos para garantizar una ejecución eficiente de la función de mantenimiento.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
