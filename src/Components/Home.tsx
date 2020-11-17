import { Link } from 'gatsby';
import React from 'react';
import Styles from './Home.module.css';
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// //import { BLOCKS } from '@contentful/rich-text-types'
// //import Markdown from 'react-markdown';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// //import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// //import CardHeader from '@material-ui/core/CardHeader'
// import Truncate from 'react-truncate';

const Home = () => {
    return (
      <div>
        <h1 className={Styles.main}>
          Welcome to Shaikh Blogging
        </h1>
        <div className={Styles.buttondiv}>
          <Link to='/blog'> <button className={Styles.button}>View Blogs</button> </Link>
        </div>     
      </div>

    )
}


export default Home;
