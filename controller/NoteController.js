import Notes from "../models/NotesModel.js"

//GET NOTES
async function getNotes(req,res){
try {
    const result = await Notes.findAll();
    return res.status(200).json(result)
} catch (error) {
    console.log(error.message)
   }   
}

async function getNotesById(req,res){
    try {
        const result = await Notes.findOne({
            where:{
                id: req.params.id
            }
        });
        return res.status(200).json(result)
    } catch (error) {
        console.log(error.message)
       }   
    }

//CREATE NOTES
async function createNotes(req,res) {
    try {
      await Notes.create(req.body)
      return res.status(201).json({msg:"notes created"})  
    } catch (error) {
        console.log(error.message) 
    }  
}

async function updateNotes(req,res){
    try {
     await Notes.update(req.body,{
        where:{
            id: req.params.id 
        }
     })
     res.status(200).json({msg: "Notes Updated"});
    } catch (error) {
        console.log(error.message)
    }
}

//DELETE 
async function deleteNotes(req,res) {
    try {
       await Notes.destroy({
        where:{
            id: req.params.id
          } 
       })
       res.status(200).json({msg: "Notes Deleted"});
    } catch (error) {
        console.log(error.message)
    }
    
}

export {getNotes,getNotesById,createNotes,updateNotes,deleteNotes}