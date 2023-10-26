import React from 'react'


export const Reg = () => {
  return (
    <>
     <div class="second-container">
            
            <header>Registration Form</header>
           <form action="succ.html">
           <div class="form first">
               <div class="details personal">
               
                <label class="title regs">Enter New Case Details</label>
               
                   <div class="fields">
                       <div class="input-field">
                           <label>S.No.</label>
                           <input type="number" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>Crime No.</label>
                           <input type="number" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>Value</label>
                           <input type="number" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>No.of accusses</label>
                           <input type="number" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>Name of IO</label>
                           <input type="text" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>Property</label>
                           <textarea></textarea>
                       </div>
                       <div class="input-field">
                           <label>Date</label>
                           <input type="date" placeholder="" required/>
                       </div>
                       <div class="input-field">
                           <label>Post</label>
                           <select required>
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
                       <div class="input-field">
                           <label>Classification</label>
                           <select required>
                             <option disabled selected>Select</option>
                               <option>Engg</option>
                               <option>Med</option>
                               <option>other</option>
                               
                           </select>
                       </div>
                    
                   </div>
                </div>
               
                <div class="second">
                   <label class="Details" for="address">Enter The Details of Acussed Person</label>
                  <span>Address </span> 
                  <textarea  name="address"></textarea>
        
                  <div class="buttons-reg">
                   <button class="btn-reg">
                       <a href="#"><span class="">Submit</span></a>
                   </button>
        
                   <button class="btn-reg">
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
