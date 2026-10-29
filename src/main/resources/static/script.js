  const dialog1 = document.getElementById('sareeDialog1');
  const openLink1 = document.getElementById('openLink1');

    // Open the dialog smoothly as a modal
    openLink1.addEventListener('click', (event) => {
      event.preventDefault();
      dialog1.showModal();
    });
	
	closeBtn1.addEventListener('click', () => {
		console.log('Close button clicked');
	   dialog1.close();
	 });
	 
	 const dialog2 = document.getElementById('sareeDialog2');
	 const openLink2 = document.getElementById('openLink2');

	   // Open the dialog smoothly as a modal
	   openLink2.addEventListener('click', (event) => {
	     event.preventDefault();
	     dialog2.showModal();
	   });

	 closeBtn2.addEventListener('click', () => {
	 	console.log('Close button clicked');
	    dialog2.close();
	  });