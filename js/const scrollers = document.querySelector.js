<script>
  function scrollItems(direction) {
    const scroller = document.getElementById('scroller');
    const scrollAmount = 240; // width of item + gap
    scroller.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
</script>
