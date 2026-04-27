-- Public buckets serve files via the public CDN URL without needing a SELECT policy on storage.objects.
-- Removing the broad SELECT policy prevents anonymous file listing while keeping <video src="..."> embeds working.
drop policy if exists "Public can view videos" on storage.objects;