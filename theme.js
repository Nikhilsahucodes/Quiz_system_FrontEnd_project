(function(){
  const toggles = document.querySelectorAll('#theme-toggle, .theme-toggle');
  const key = 'sq_theme';
  function setTheme(name){
    if(name === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    try{ localStorage.setItem(key,name); }catch(e){}
  }
  toggles.forEach(t => t && t.addEventListener('click', ()=>{
    const cur = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(cur === 'dark' ? 'light' : 'dark');
    toggles.forEach(btn => {
      if(document.body.classList.contains('dark')) btn.textContent = '☀️';
      else btn.textContent = '🌙';
    });
  }));
  try{
    const saved = localStorage.getItem(key) || 'light';
    setTheme(saved);
    toggles.forEach(btn => { btn.textContent = (saved === 'dark') ? '☀️' : '🌙'; });
  }catch(e){ setTheme('light'); }
})();