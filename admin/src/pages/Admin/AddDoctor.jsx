import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form action="">
      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor="doc-img ">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='doc-img' hidden />
          <p>Upload doctor <br /> picture </p>
        </div>

        <div>
          <div>

            <div>
              <p>Your name</p>
              <input type="text" placeholder='Name' required />
            </div>

            <div>
              <p>Doctor Email</p>
              <input type="text" placeholder='Name' required />
            </div>

            <div>
              <p>Doctor password</p>
              <input type="password" placeholder='Password' required />
            </div>

            <div>
              <p>Doctor Exprience</p>
              <select name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div>
              <p>fees</p>
              <input type="number" placeholder='fees' required />
            </div>

            <div>
              <div>
                <p>Speciality</p>
                <select name="" id="">
                  <option value="General physician">General physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>
            </div>

          </div>
        </div>

      </div>
    </form>
  )
}

export default AddDoctor