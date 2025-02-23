// Backend API endpoint example (Node.js/Express)
router.post('/auth/profile/upload-photo', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = await uploadToCloudinary(req.file); // Implement your image upload logic
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ message: 'Failed to upload image' });
  }
});

nih ya gua kasih contoh route server nya gua cari dari ai si begini soal tampilan nya udah. di edit provile.jsx



