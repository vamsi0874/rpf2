import React from 'react'



export const CaseDetails = () => {
  return (
    <>
    <div class="cD-container">
     <form action="#">
       <div class="form first">
           <div class="details personal">
           
            <label class="cD-title">Case Details</label>
               <div class="cD-fields">
                   <div class="cD-input-field">
                       <label>S.No </label>
                       <input type="number" placeholder="S.No" required/>
                   </div>
                   <div class="cD-input-field">
                       <label>Crime No.</label>
                      
                       <input type="number" placeholder="Enter crime No" required/>
                   </div>
                   <div class="cD-input-field">
                       <label>Classification</label>
                       <select required>
                           <option disabled selected>Select</option>
                           <option>Engg</option>
                           <option>medical</option>
                           <option>Others</option>
                       </select>
                   </div>
                   <div class="cD-input-field">
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
                
                   <div class="cD-input-field">
                       <label>Date</label>
                       <input type="date" placeholder="Enter date" required/>
                   </div>
    
                   <div class="cD-input-field">
                       <label>No. of Acusses</label>
                       <input type="number" placeholder="No." required/>
                   </div>
    
                   <div class="cD-input-field">
                       <label>Value</label>
                       <input type="number" placeholder="value" required/>
                   </div>
    
    
                   <div class="cD-input-field">
                       <label>Name of the I O</label>
                       <input type="text" placeholder="Role" required />
                   </div>
                   <div class="cD-input-field">
                       <label>Property</label>
                       {/* <!-- <input type="text" placeholder="item" required /> --> */}
                       <textarea  name="Property" ></textarea>
                   </div>
                   <div class="cD-input-field">
                  
                    <label>Address </label> 
                    <textarea  name="address"></textarea>
                   </div>
                  
               </div>
            </div>
            <div class="cD-buttons">
                <button class="cD-btn">
                    <a href="#"><span class="">update</span></a>
                </button>
     
                <button class="cD-btn">
                    <a href="#"><span class="">Clear</span></a>
                </button>
            </div>
           </div>
        </form>
     </div> 
    </>
  )
}
