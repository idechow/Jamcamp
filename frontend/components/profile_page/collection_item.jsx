import React from 'react';
import { Link } from 'react-router-dom';


class CollectionItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         collect: this.props.currentUser ? !!this.props.currentUser.collection[this.props.album.id] : false,
      }
      this.handleCollect = this.handleCollect.bind(this);
      // this.toggleState = this.toggleState.bind(this);
   }

   componentDidUpdate(prevProps) {
      if (this.props.currentUser !== prevProps.currentUser) {
         let newState = this.props.currentUser ? !!this.props.currentUser.collection[this.props.album.id] : false;
         this.setState({ collect: newState });
      }
   }

   // toggleState(){
   //    setTimeout(() => this.setState({ collect: !this.state.collect }), 100);
   // }

   handleCollect(e) {
      e.preventDefault();
      if (!!this.props.currentUser) {
         const collectData = {
            user_id: this.props.currentUser.id,
            album_id: this.props.album.id,
         };
         if (this.state.collect) {
            this.props.removeCollect(this.props.album.id)
               .then(() => {
                  this.setState({ collect: false })
                  //!!this.props.currentUser.collection[this.props.album.id]
               });
         } else {
            this.props.addCollect(collectData)
               .then(() => {
                  this.setState({ collect: true })
               });
         }
      } else {
         this.props.openModal('REDIRECT');
      }
   }

   collectButton() {
      const { album, currentUser, pathId } = this.props;

      if (!!currentUser && this.state.collect) {
         return (
            <>
               <button className="pfl-collect-btn"
                  onClick={this.handleCollect}>
                  <span className="pfl-collect-icon-wrap"
                     title="Remove this album from your collection">
                     <i className="fas fa-heart pfl-collect-icon"></i>
                  </span>
                  <span className="pfl-collect-text"
                     title="Remove this album from your collection">
                     in collection
                  </span>
               </button>
               {pathId === currentUser.id ? null : <> 
                  <span className='pfl-collect-dot'>•</span>
                  <Link className="pfl-collect-link"
                     to={`/user/${currentUser.id}`}
                     title='View your collection'>
                     view
                  </Link></>}
               <span className='pfl-collect-dot'>•</span>
               <Link className="pfl-collect-link"
                  to={`/artist/${album.bandId}/album/${album.id}`}>
                  hear more
               </Link>
            </>
         )
      } else {
         return (
            <>
               <button className="pfl-collect-btn"
                  onClick={this.handleCollect}>
                  <span className="pfl-collect-icon-wrap"
                     title="Add this album to your collection">
                     <i className="far fa-heart pfl-collect-icon"></i>
                  </span>
                  <span className="pfl-collect-text"
                     title="Add this album to your collection">
                     add to collection
                     </span>
               </button>
               <span className='pfl-collect-dot'>•</span>
               <Link className="pfl-collect-link"
                  to={`/artist/${album.bandId}/album/${album.id}`}>
                  hear more
               </Link>
            </>
         )
      }
   }

   render() {
      const { album } = this.props;
      
      return (
         <li className='collect-li'>
            <div className='collect-links-wrap'>
               <Link to={`/artist/${album.bandId}/album/${album.id}`}>
                  <img className='album-cover-collect' src={album.photoUrl} />
               </Link>
               <Link className='collect-tag-link' 
                  to={`/artist/${album.bandId}/album/${album.id}`}>
                  <div className='collect-name'>{album.name}</div>
                  <div className='collect-artist'>by {album.artist}</div>
               </Link>
            </div>
            <div className='collect-details-wrap'>
               <div className='collect-btn-wrap'>{this.collectButton()}</div>
               <div className='collect-count'>
                  appears in&nbsp;
                  <span>
                     {album.numCollectors}&nbsp;
                     {album.numCollectors === 1 ? 'collection' : 'collections'}
                  </span>
               </div>
            </div>
         </li>
      );
   }
}

export default CollectionItem;