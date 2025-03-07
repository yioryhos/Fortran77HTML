<img src="https://github.com/yioryhos/f77html/blob/F77HTML/logo.png" style="width:200px;border:solid 1px orange;float:right"/>

### Write Fortran 77 code inside HTML and see the results in the DOM!

#### Setting up

- Upload the files <b>index.html</b> and <b>ajax.js</b> on you Linux server. 

- Also the files <b>comis.cgi</b> and <b>main.cgi</b> with permissions 755. (all files ~ 3MB)

- Open <b>index.html</b> with your browser and check that you see the 20 <i>'Hello from Fortran'</i> paragraphs created with inline fortran!
  
That is all!

#### Home page
https://f77html.mysch.gr

Visit my home page for examples, and also to check how to generate <b>beautiful plots</b> with Fortran inside HTML using the DISLIN plotting library (allready included in the precompiled comis.cgi file, so no furthur actions required!).

#### Read the COMIS.ps
Check the document (pages 9 -14) to see details about the f77 commands.

#### Based on
- The <a href='https://paw.web.cern.ch/paw/' target="_blank">CERNLIB</a> library
- The <a href='https://www.dislin.de/' target="_blank">DISLIN</a> ploting library

#### Bugs
The routine <b>frame</b> in Dislin is not working and it does not showing an error message too. Avoid it until a fix is available.

#### Donations
If you think that this work is a good work and you can affort to support it, you may donate by clicking the button below.

<form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="5NZPQ8MQDX972" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" width="100" />
<form>
