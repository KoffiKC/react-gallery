import GalleryItem from '../GalleryItem/GalleryItem'


function GalleryList ({allPics}) {
    console.log(allPics);
    return(
        <>
            {allPics.map(picture => 
                <GalleryItem 
                id={picture.id}
                key={picture.id}
                path={picture.path}
                likes={picture.likes}/>
                )}
        </>
    )
}

export default GalleryList