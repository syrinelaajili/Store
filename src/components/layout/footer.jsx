import React from 'react'
import { FaFacebook , FaInstagram, FaPinterestP,FaYoutube } from "react-icons/fa";

export default function footer() {
  return (
    <div>
      <hr />
      <div className='footer'>
        <section className='footer-menu'></section>
      <h6>AIDE</h6>
      <ul>
        <li>
          <p> <a href="">Suivez votre Commande</a> </p>
        </li>
        <li>
          <p><a href="">Contactez nous</a></p>
        </li>
      </ul>
      <h6>Information</h6>
      <ul>
        <li>
          <p><a href="">Politique de Livraison & Retour</a></p>
        </li>
        <li>
          <p><a href="">Conditions Générales De Vente</a></p>
        </li>
        <li>
          <p><a href="">Politique De Confidentialité</a></p>
        </li>
      </ul>
      <h6>Suivez-nous</h6>
      <ul>
        <li><a href=""><FaFacebook /></a> </li>
        <li><a href="" ><FaInstagram /></a></li>
        <li><a href="" ><FaPinterestP /></a></li>
        <li><a href="" ><FaYoutube /></a></li>
      </ul>
      </div>

      <hr />
    </div>
  
  )
}
