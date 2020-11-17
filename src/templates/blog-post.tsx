import React,{useContext} from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from '../Components/Layout';
import Styles from './blog-post.module.css';
import {AuthContext} from '../Context/auth';
import firebase from 'gatsby-plugin-firebase';
import Truncate from 'react-truncate';
import {navigate} from 'gatsby'

export default function Product({pageContext}){
    const {user} = useContext(AuthContext);
    console.log(pageContext);
    const {blogDetails} = pageContext;

    const handleChange = async () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithPopup(provider)
        navigate(`/blog/${blogDetails.slug}`)
      }
    return (
        <Layout>
            <h1 className={Styles.title}>{blogDetails.title}</h1>
            <p className={Styles.author}>Updated <span className={Styles.author_title}>{blogDetails.date}</span></p>
            <img className={Styles.img} src={blogDetails.image.fluid.src}/>
            <br/>
            {!user  ?  ( <Truncate
            lines={10}
            >
            <div className={Styles.boxbottomshadow }><p className={Styles.content}>{documentToReactComponents(blogDetails.content.json)}</p></div>
            
            </Truncate> 
            
            ) : (
                <p className={Styles.content}>{documentToReactComponents(blogDetails.content.json)}</p>
            )}
            <br/>
            <br/>
            {!user ? <button onClick={handleChange}> Read More </button> :null }
            
        </Layout>
    )
}