(function(){
  const form = document.getElementById('quiz-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const answers = { q1: 'a', q2: 'a', q3: 'a', q4: 'a', q5: 'a', q6: 'a', q7: 'b' };
    let total = 0, score = 0;
    for(const k in answers){ total++; const el = form.querySelector('[name="'+k+'"]:checked'); if(el && el.value === answers[k]) score++; }
    sessionStorage.setItem('sq_score', String(score));
    sessionStorage.setItem('sq_total', String(total));
    window.location.href = 'result.html';
  });
})();