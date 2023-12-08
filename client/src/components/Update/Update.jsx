/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import parcelServices from "../../services/parcel.service";

function Update({setUpdate, updateId, user, step, setUpdated}) {
    const update = (e) => {
        e.preventDefault();
        let parcel = {};

        if(step === 'available') {
          parcel = {
            status: e.target.status.value,
            bikerName: user.name,
            bikerId: user.id,
            pickupTimestamp: new Date(),
            deliveryTimestamp: e.target.dropDate.value
          }
        }else if (step ==='picked') {
          parcel = {
            status: e.target.status.value,
          }
        }

        parcelServices.update(updateId, parcel)
        .then(res => {
          setUpdate(false);
          setUpdated(true)
        })
        .catch(err =>{
          console.log(err)
          setUpdate(false);
        });
    }

  return (
    <form onSubmit={(e) => update(e)} className="flex flex-col gap-4 items-center">
        { step === 'available' && <input required name="dropDate" id="dropDate" type="date" placeholder="enter the drop date" className="border border-blue_200 rounded-md focus-visible:outline-blue_500 pl-1 leading-8" />}
        <select required name="status" id="status" className="border border-blue_200 rounded-md py-1 focus:outline-blue_500 bg-white w-2/3">
            <option value="Status">Status</option>
            <option value="Picked up">Picked up</option>
            <option value="In way">In way</option>
            <option value="Delevered">Delevered</option>
          </select>
        <button name="submit" type="submit" className="bg-blue_500 px-4 py-1 rounded-md text-white focus:bg-blue_700 w-fit">Update</button>
    </form>
  )
}

export default Update