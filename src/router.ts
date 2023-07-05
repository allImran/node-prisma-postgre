import { Router } from 'express'
import { body, validationResult } from 'express-validator'

const router = new Router()

/**
 * product
 */
router.get('/product', (req, res) =>{
    return res.json({message: 'hello'})
})
router.get('/product/:id', () =>{})
router.put('/product/:id', body('name').isString(),
    (req, res) =>{
    const errors = validationResult(req)
    console.log(errors, 'errors')

    if(!errors.isEmpty()) {
        res.status(400)
        res.json({errors: errors.array()})
    }
})
router.post('/product/', () =>{})
router.delete('/product/:id', () =>{})

/**
 * update
 */
router.get('/update', () =>{})
router.get('/update/:id', () =>{})
router.put('/update/:id', () =>{})
router.post('/update/', () =>{})
router.delete('/update/:id', () =>{})

/**
 * update Point
 */
router.get('/updatepoint', () =>{})
router.get('/updatepoint/:id', () =>{})
router.put('/updatepoint/:id', () =>{})
router.post('/updatepoint/', () =>{})
router.delete('/updatepoint/:id', () =>{})

export default router