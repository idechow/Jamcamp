import React from 'react';

class ProfileIndex extends React.Component {
   constructor(props) {
      super(props);
   }

   collectionItem(album){

      return(
         <div key={album.id}>collect{album.id}</div>
      );
   }

   discogItem(album){

      return (
         <div key={album.id}>discog{album.id}</div>
      );
   }

   followsItem(user){

      return (
         <div key={user.id}>follow{user.id}</div>
      );
   }


   render() {
      const {type, albums, users} = this.props;
      let grid;

      switch (type) {
         case 'collection':
            grid = albums.map(album => {
               return this.collectionItem(album);
            });
            break;

         case 'discog':
            grid = albums.map(album => {
               return this.discogItem(album);
            });
            break;

         case 'follows':
            grid = users.map(user => {
               return this.followsItem(user);
            });
            break;

         default:
            grid = null;
            break;
      }

      return(
         <div className='album-index-container'>
            <ul className='album-index-grid'>
               { grid }
            </ul>
         </div>
      );
   }
}

export default ProfileIndex;
