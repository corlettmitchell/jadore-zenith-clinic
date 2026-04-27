-- Create a public storage bucket for marketing videos
insert into storage.buckets (id, name, public)
values ('videos', 'videos', true)
on conflict (id) do update set public = true;

-- Public read access (the site embeds these videos on public pages)
create policy "Public can view videos"
on storage.objects
for select
to public
using (bucket_id = 'videos');

-- Authenticated users can upload / manage (panel uploads bypass RLS via service role)
create policy "Authenticated can upload videos"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'videos');

create policy "Authenticated can update videos"
on storage.objects
for update
to authenticated
using (bucket_id = 'videos');

create policy "Authenticated can delete videos"
on storage.objects
for delete
to authenticated
using (bucket_id = 'videos');