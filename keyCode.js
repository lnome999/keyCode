

/*const keys=document.getElementsByClassName('key');


window.addEventListener('keydown',(e)=>{

	if (e.key===' ') {
		keys[0].innerHTML='space'
	}
	else {
	    keys[0].innerHTML=e.key;}

	keys[1].innerHTML=e.keyCode;
	keys[2].innerHTML=e.code;
})


*/

const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=> {
  insert.innerHTML=`

  	<div class='key'>
			${e.key===' '?'spazio':e.key}
			<small>event.key</small>
		</div>
		<div class='key'>
			${e.keyCode}
			<small>event.keyCode</small>
		</div>
		<div class='key'>
			${e.code}
			<small>event.code</small>
		</div>
		<div class='key'> Press any key to get the keyCode</div>
	</div>




  `

}
)

const x='solo per prova Git';
const y='prova per branch';
const z='altra prova 10 settembre';