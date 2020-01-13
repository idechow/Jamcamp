import React from 'react';
import AlbumItemContainer from './new_album_item_container';

class NotableAlbums extends React.Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.props.getNewAlbums()
   }

   render() {
      const albums = this.props.albums.reverse();
      return (
         <section className="new-albums-container">
            <div className="home-separator-text">NEW AND NOTABLE</div>
            <ul className="new-albums-list">
               {albums.map((album) => <NewAlbumItemContainer key={album.id} album={album} />)}
            </ul>
         </section>
      );
   }
}

export default NotableAlbums;