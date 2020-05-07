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

   // toggleState(){
   //    setTimeout(() => this.setState({ collect: !this.state.collect }), 100);
   // }

   handleCollect(e) {
      e.preventDefault();
      const collectData = {
         user_id: this.props.currentUser.id,
         album_id: this.props.album.id,
      };
      if (this.state.collect) {
         this.props.removeCollect(this.props.album.id)
            .then(() => {
               this.setState({ collect: false })
            });
      } else {
         this.props.addCollect(collectData)
            .then(() => {
               this.setState({ collect: true })
            });
      }
   }

   collectButton() {
      if (!!this.props.currentUser) {
         return (
            <>
               <button
                  className="album-collect-btn"
                  onClick={this.handleCollect}>
                  <span className="album-collect-icon-wrap">
                     {this.props.currentUser.collection[this.props.album.id]
                        ? <i className="fas fa-heart album-collect-icon"></i>
                        : <i className="far fa-heart album-collect-icon"></i>}
                  </span>
                  <span className="album-collect-text">
                     {this.props.currentUser.collection[this.props.album.id]
                        ? "In Collection" : "Add to Collection"}
                  </span>
               </button>
               <span className="album-collect-link-wrap">
                  {this.props.currentUser.collection[this.props.album.id]
                     ? <>
                        <span className="album-collect-dash"> - </span>
                        <Link
                           className="album-collect-link"
                           to={`/user/${this.props.currentUser.id}`}>
                           view
                     </Link>
                     </>
                     : null}
               </span>
            </>
         );
      } else {
         return null;
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
               <Link to={`/artist/${album.bandId}/album/${album.id}`}>
                  collectname{album.name}
               </Link>
            </div>
            <div>
               {this.collectButton()}
            </div>
         </li>
      );
   }
}

export default CollectionItem;