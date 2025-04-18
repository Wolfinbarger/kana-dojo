const Kana = () => {
  return (
    <>
      <h1>Kana</h1>
      <div className='container__kana-display'>DISPLAY</div>
      <div className='container__kana-input'>
        <input type='text' id='kana' name='kana' />
      </div>
      <div className='container__kana-hint'>
        <p>Hover over kana to show romanization.</p>
      </div>
    </>
  );
};
export default Kana;
