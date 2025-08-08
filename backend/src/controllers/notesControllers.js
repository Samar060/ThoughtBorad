 import Note from "../models/Note.js"

//  api request to fetch the data from the server
export  async function getAllNotes(req,res){
   try {
    const notes=await Note.find().sort({createdAt:-1})
    res.status(200).json(notes)
   } catch (error) {
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({messaage:"internal server error"})
   }
 }


//  api to find note by id
export  async function getNotesById(req,res){
  try {
    const note=await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message:"Note Not Found"});
    res.json(note)
  } catch (error) {
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({messaage:"internal server error"})
  }
}


// api requesst to sent data to the server
 export  async function createNotes(req,res){
   try {
    const {title,content}=req.body
    const note=new Note({title,content})

    const saveNote=await note.save();
    res.status(201).json(saveNote)
   } catch (error) {
    console.error("Error in getAllNotes controller",error)
    res.status(500).json({messaage:"internal server error"})
   } 
 }


  // api to update the data
  export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );
    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


//  api to delete the notes
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

