import React from 'react'

export const Trail = () => {
  return (
    <>
        <div class="second-container trail">
            
            <header class="heading">Trail Form</header>
        <form action="#">
           <div class="form first">
               <div class="details personal trail gtrail">
                    <div class='gtitle'>
                        <label class="title main ">Enter New Case Details</label>
                    </div>
                
               
                   <div class="fields-trail">
                       <div class="input-field gcrime">
                           <label>Crime No.</label>
                           <input class='gpc' type="number" placeholder="Enter crime No" required/>
                       </div>
                       <div class="input-field post gpost">
                           <label>Post</label><br/>
                           <select class='gpp' required>
                             <option disabled selected>Select</option>
                               <option>NLR</option>
                               <option>BZA</option>
                               <option>OGL</option>
                               <option>CLX</option>
                               <option>TEL</option>
                               <option>UY</option>
                               <option>RYP</option>
                               <option>EE</option>
                               <option>BVRM</option>
                               <option>COA</option>
                               <option>RJY</option>
                               <option>AKP</option> 
                               <option>Others</option>
                           </select>
                       </div>
                       <div class="input-field genter">
                        {/* <label class="title sec ">Enter allocated account No</label> */}
                        <div class='gcc'>
                        <label >cc No</label>
                        </div>
                        
                        <input class="crime gpc" type="number" placeholder="Enter crime No" required/>
                    </div>
                   </div>
                  
                </div>
               
                   
             <div class="second trail">
        
                  <div class="buttons btrail">
                   <button class="btn btnt">
                       <a href="#"><span class="">Submit</span></a>
                   </button>
        
                   <button class="btn btnt">
                       <a href="#"><span class="">Clear</span></a>
                   </button>
                  
                  </div>
                </div>
                  
                  
               </div> 
            </form>
        
            
           </div>
    </>
  )
}
