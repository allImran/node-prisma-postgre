import { Router } from 'express'

const router = new Router()

/**
 * product
 */
router.get('/product', (req, res) =>{
    return res.json({message: 'hello'})
})
router.get('/product/:id', () =>{})
router.put('/product/:id', () =>{})
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