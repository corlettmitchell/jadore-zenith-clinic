DROP POLICY IF EXISTS "Authenticated can update videos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can delete videos" ON storage.objects;

CREATE POLICY "Users can update their own videos"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'videos' AND owner = auth.uid())
WITH CHECK (bucket_id = 'videos' AND owner = auth.uid());

CREATE POLICY "Users can delete their own videos"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'videos' AND owner = auth.uid());