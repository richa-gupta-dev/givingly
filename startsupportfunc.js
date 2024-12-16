const support = document.getElementById('support');
const kickoff = document.getElementById('kickoff');
const proceedButton = document.getElementById('proceedButton');

support.addEventListener('click', () => {
  if(support.checked && kickoff.checked){
    kickoff.checked = false;
  }
  if(support.checked){
    proceedButton.disabled = false;
  }
  if(!support.checked && !kickoff.checked){
    proceedButton.disabled = true;
  }
});

kickoff.addEventListener('click', () => {
  if(kickoff.checked && support.checked){
    support.checked = false;
  }
  if(kickoff.checked){
    proceedButton.disabled = false;
  }
  if(!support.checked && !kickoff.checked){
    proceedButton.disabled = true;
  }
});