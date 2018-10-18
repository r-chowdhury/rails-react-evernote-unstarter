class Api::V1::NotesController < ApplicationController

  def index
    notes = Note.all
    render json: notes.order(:id)
  end


  def create
    note = Note.new(user_id: note_params[:user_id], title: note_params[:title], content: note_params[:content])
    if note.valid?
      note.save
      render json: {note: note, success: true}
    else
      render json: {errors: note.errors}
    end
  end

  def update
    note = Note.find(params[:id])
    note.update(title: note_params[:title],  content: note_params[:content])
    if note.valid?
      render json: {note: note, success: true}
    else
      render json: {errors: note.errors}
    end
  end

  private
  def note_params
    params.require(:note).permit(:user_id, :title, :content)
  end

end
