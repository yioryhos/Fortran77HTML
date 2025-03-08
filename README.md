<img src="https://github.com/yioryhos/f77html/blob/F77HTML/logo.png" style="width:220px;border:solid 1px orange;float:laft"/>

### Write Fortran 77 code inside HTML and see the results in the DOM!

<table><tr><td width="400">
<code>&lt;template id="fortran-1">  
do i = 1, 100
  print*, int(rnd()*1000+1
enddo
&lt;/template>
</code>
</td><td>86, 564, 916, 597, 358, 913, 751, 747, 925, 562, 714, 28, 310, 12, 389, 836, 982, 390, 589, 876, 311, 501, 69, 235, 707, 109, 761, 777, 593, 89, 163, 636, 628, 681, 451, 791, 437, 453, 494, 460, 638, 553, 702, 838, 441, 340, 371, 377, 356, 82, 693, 585, 384, 846, 356, 913, 357, 619, 948, 146, 295, 293, 448, 812, 22, 795, 677, 8, 658, 681, 86, 316, 192, 152, 961, 873, 920, 399, 956, 343, 230, 145, 652, 905, 689, 576, 497, 372, 445, 36, 554, 374, 514, 397, 730, 212, 23, 172, 878, 439, </td>
</tr>
</table>



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
