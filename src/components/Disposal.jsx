import React from 'react'

export const Disposal = () => {
  return (
    <>
<div class="cD-container">
 <form action="#">
   <div class="form first">
       <div class="details personal">
       
        <label class="cD-title">Case Details</label>
           <div class="cD-fields disposal">
            <div class="cDd-input-field">
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
            <div class="cDd-input-field">
                <label>Crime No.</label>
               
                <input type="number" placeholder="Enter crime No" required/>
            </div>
               <div class="cDd-input-field">
                   <label>con </label>
                   <input type="" placeholder="S.No" required/>
               </div>
               <div class="cDd-input-field">
                   <label>acq </label>
                   <input type="" placeholder="S.No" required/>
               </div>
               <div class="cDd-input-field">
                   <label>dis/a b/wit</label>
                   <input type="" placeholder="S.No" required/>
               </div>
            
              

               <div class="cDd-input-field">
                   <label>outsiders</label>
                   <input type="number" placeholder="No." required/>
               </div>

               <div class="cDd-input-field">
                   <label>RailwayEmployee</label>
                   <input type="number" placeholder="value" required/>
               </div>
               <div class="cDd-input-field">
                   <label>RPF</label>
                   <input type="number" placeholder="value" required/>
               </div>
               <div class="cDd-input-field">
                <label>Date of Disposal</label>
                <input type="date" placeholder="Enter date" required/>
            </div>

               <div class="cDd-input-field">
                   <label>Remarks</label>
                   <textarea  name="Property" ></textarea>
               </div>
           </div>
        </div>
        <div class="cDd-buttons">
            <button class="cD-btn">
                <a href="#"><span class="">submit</span></a>
            </button>
 
            <button class="cD-btn">
                <a href="#"><span class="">Clear</span></a>
            </button>
            <button class="cD-btn">
                <a href="#"><span class="">Back</span></a>
            </button>
        </div>
       </div>
    </form>
 </div> 

    </>
  )
}
