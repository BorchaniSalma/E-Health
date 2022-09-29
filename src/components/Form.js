import React from "react";
import {useState} from 'react';
export const getReclamation = () => {
    return Form.reclamation;
}
export default function Form()
{
   const initialState = {
    reference:'',
    type:'',
    etablissement:'',
    region:''
   }
   const [reference , setReference] = useState('');
   const [type, setType] = useState('');
   const [etablissement, setEtblissement] = useState('');
   const [region, setRegion] = useState('');
   const [reclamation, setReclamation] = useState(initialState);

   const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    console.log('reclamation' ,reclamation);
    // 👇️ clear all input values in the form
    setEtblissement('');
    setReference('');
    setRegion('');
    setType('');
  };




    return (<form onSubmit={handleSubmit}>
    <label>
        Reference medicament:
        <input type="text" name="ref" value = {reference} onChange={event => setReference(event.target.value)}/>
    </label>
    <label>
        Type:
        <select type="select" name="type" value = {type} onChange={event => setType(event.target.value)}>
        <option valeur="pharmacien">pharmacien</option>
        <option valeur="grossiste">grossiste</option>
        <option valeur="medecin">medecin</option>
        </select>
    </label>
    <label>
        Etablissement:
        <input type="text" name="etab" value = {etablissement} onChange={event => setEtblissement(event.target.value)}/>
    </label>
    <label>
        Region:
        <input type="text" name="reg" value = {region} onChange={event => setRegion(event.target.value)}/>
    </label>
    <input type="submit" value="Submit" onClick={event => setReclamation({
        reference : reference,
        type:type,
        etablissement:etablissement,
        region:region
    })} />
    </form>)
    
}