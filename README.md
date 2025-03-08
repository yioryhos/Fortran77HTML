<img src="https://github.com/yioryhos/f77html/blob/F77HTML/logo.png" style="width:260px;border:solid 1px orange;float:right"/>

### Write Fortran 77 code inside HTML and see the results in the DOM!

#### Setting up

- Upload the files <b>index.html</b> and <b>ajax.js</b> on you Linux server. 

- Also the files <b>comis.cgi</b> and <b>main.cgi</b> with permissions 755. (all files ~ 3MB)

- Open <b>index.html</b> with your browser and check that you see the 20 <em>'Hello from Fortran'</em> paragraphs created with inline fortran!
  
That is all!

#### Home page
https://f77html.mysch.gr

Visit my home page for examples, and also to check how to generate <b>beautiful plots</b> with Fortran inside HTML, using the DISLIN plotting library (allready included in the precompiled comis.cgi file, so no furthur actions required!).

#### Read the COMIS.ps
Check the document (pages 9 -14) to see details about the f77 commands.

#### Based on
- The <a href='https://paw.web.cern.ch/paw/' target="_blank">CERNLIB</a> library
- The <a href='https://www.dislin.de/' target="_blank">DISLIN</a> ploting library

#### Bugs
The routine <b>frame</b> in Dislin is not working and it does not showing an error message too. Avoid it until a fix is available.
