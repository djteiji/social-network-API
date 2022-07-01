const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts);
  

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:userId')
  .post(createThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);


module.exports = router;