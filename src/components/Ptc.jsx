import React from 'react'


export const Ptc = () => {
  return (
    <>
    <div class="cD-container">
        <form action="#">
          <div class="form first">
              <div class="details personal">
              
               <label class="cD-title">Pending Trail Cases</label>
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
                          <label>Coutsiders</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>RPF</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>Cited</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>To be examed</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>Disposal</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>Recovered property</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>Railway Employee</label>
                         
                          <input type="number" placeholder="Enter crime No" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>cc No.</label>
                         
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
                          <label>Date of reg</label>
                          <input type="date" placeholder="Enter date" required/>
                      </div>
       
                      <div class="cD-input-field">
                          <label>Examed</label>
                          <input type="number" placeholder="No." required/>
                      </div>
       
                      <div class="cD-input-field">
                          <label>Value of property</label>
                          <input type="number" placeholder="value" required/>
                      </div>
       
       
                      <div class="cD-input-field">
                          <label>present position</label>
                          <input type="text" placeholder="Role" required/>
                      </div>
                      <div class="cD-input-field">
                          <label>Property</label>
                          {/* <!-- <input type="text" placeholder="item" required> --> */}
                          <textarea  name="Property" ></textarea>
                      </div>
                      <div class="cD-input-field">
                     
                       <label>posted date</label> 
                       <input type="date" placeholder="Enter date" required/>
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
